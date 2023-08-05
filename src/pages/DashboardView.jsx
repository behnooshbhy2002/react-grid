import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { FullscreenOutlined } from "@ant-design/icons/lib/icons";
import { ReloadOutlined } from "@ant-design/icons/lib/icons";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import GridLayout from "./GridLayout";
import "./test/Main.css";

export default function DashboardView() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const [posts, setPosts] = useState([]);
  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/obj", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPosts(result);
        setIsDarkMode(result?.dark);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeTheme = (event) => {
    setChecked((s) => !s);
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("changing component to editable page");
    navigate("/edit");
  };
  return (
    <div>
      <nav
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="left-buttons">
          <button className="main-buttons">
            <FullscreenOutlined />
          </button>
          <button onClick={handleEdit} className="main-buttons">
            <EditOutlined />
          </button>
          <button className="main-buttons">
            <ReloadOutlined />
          </button>
          <div className="main-switch">
            <Switch checked={checked} onChange={handleChangeTheme}></Switch>
          </div>
          <div className="dark-text">
            <span>حالت تاریک</span>
          </div>
        </div>
        <Breadcrumb
          className="dark-text breadcrumb"
          style={{ textAlign: "right", direction: "rtl" }}
          separator=">"
          items={[
            {
              title: "خانه",
            },
            {
              title: "نمودار ها",
              href: "",
            },
          ]}
        />
      </nav>

      <GridLayout obj={posts} Dark={isDarkMode} view={true}></GridLayout>
    </div>
  );
}
