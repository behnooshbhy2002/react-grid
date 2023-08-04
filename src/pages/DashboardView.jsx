import React, { useState, useEffect } from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { FullscreenOutlined } from "@ant-design/icons/lib/icons";
import { ReloadOutlined } from "@ant-design/icons/lib/icons";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import GridLayout from "./GridLayout";
import "./Main.css";

export default function DashboardView() {
  const [stat, setStatic] = useState(true);
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
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
  // const obj = {
  //   lay: [
  //     {
  //       w: 12,
  //       h: 12,
  //       x: 8,
  //       y: 0,
  //       minW: 2,
  //       minH: 3,
  //     },
  //     {
  //       w: 12,
  //       h: 12,
  //       x: 8,
  //       y: 0,
  //       minW: 2,
  //       minH: 3,
  //     },
  //     {
  //       w: 12,
  //       h: 12,
  //       x: 8,
  //       y: 0,
  //       minW: 2,
  //       minH: 3,
  //     },
  //     {
  //       w: 12,
  //       h: 12,
  //       x: 8,
  //       y: 0,
  //       minW: 2,
  //       minH: 3,
  //     },
  //     {
  //       w: 12,
  //       h: 12,
  //       x: 8,
  //       y: 0,
  //       minW: 2,
  //       minH: 3,
  //     },
  //   ],
  //   content: [
  //     {
  //       data: [1, 2, 1, 4, 3, 6],
  //       type: "bar",
  //     },
  //     {
  //       data: [1, 2, 4, 3],
  //       type: "spline",
  //     },
  //     {
  //       data: [1, 2, 6],
  //       type: "pie",
  //     },
  //     {
  //       data: [4, 3, 6],
  //       type: "area",
  //     },
  //     {
  //       data: [1, 4, 3, 10],
  //       type: "column",
  //     },
  //   ],
  // };
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
      {/* <ReactGridLayout
        className="layout"
        cols={24}
        rowHeight={10}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        margin={mar}
      >
        {layouts.map((layData, key) => {
          console.log(layData);
          return (
            <div
              key={key}
              data-grid={{
                w: layData.w,
                h: layData.h,
                x: layData.x,
                y: layData.y,
                minW: layData.minW,
                minH: layData.minH,
                static: true,
                isDraggable: false,
                isResizable: false,
              }}
              id="container"
              class="highcharts-dashboards"
            >
              <HighchartsReact
                className="responsiveChart"
                highcharts={Highcharts}
                options={getOptions(
                  obj.content[key].type,
                  layData.h,
                  obj.content[key].data,
                  isDarkMode
                )}
              />
            </div>
          );
        })}
      </ReactGridLayout> */}
    </div>
  );
}
