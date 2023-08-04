import React, { useState, useEffect } from "react";
// import RGL, { WidthProvider, Responsive } from "react-grid-layout";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { Switch } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { FullscreenOutlined } from "@ant-design/icons/lib/icons";
import { ReloadOutlined } from "@ant-design/icons/lib/icons";
import { Breadcrumb } from "antd";
// import { useNavigate } from "react-router-dom";
import GridLayout from "./GridLayout";

export default function DashboardEdit() {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
        setIsDarkMode(result.dark);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);
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
            <span>ذخیره سازی</span>
          </button>
          <button className="main-buttons">
            <span>بازگشت به عقب</span>
          </button>
          {/* <button onClick={handleEdit} className="main-buttons">
            <EditOutlined />
          </button> */}
          {/* <button className="main-buttons">
            <ReloadOutlined />
          </button> */}
          {/* <div className="main-switch">
            <Switch checked={checked} onChange={handleChangeTheme}></Switch>
          </div>
          <div className="dark-text">
            <span>حالت تاریک</span>
          </div> */}
        </div>
        {/* <Breadcrumb
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
        /> */}
      </nav>

      <GridLayout obj={posts} Dark={isDarkMode} view={false}></GridLayout>
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
