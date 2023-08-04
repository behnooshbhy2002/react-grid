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

import _ from "lodash";
const ReactGridLayout = WidthProvider(RGL);

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
  const obj = {
    lay: [
      {
        w: 12,
        h: 12,
        x: 8,
        y: 0,
        minW: 2,
        minH: 3,
      },
      {
        w: 12,
        h: 12,
        x: 8,
        y: 0,
        minW: 2,
        minH: 3,
      },
      {
        w: 12,
        h: 12,
        x: 8,
        y: 0,
        minW: 2,
        minH: 3,
      },
      {
        w: 12,
        h: 12,
        x: 8,
        y: 0,
        minW: 2,
        minH: 3,
      },
      {
        w: 12,
        h: 12,
        x: 8,
        y: 0,
        minW: 2,
        minH: 3,
      },
    ],
    content: [
      {
        data: [1, 2, 1, 4, 3, 6],
        type: "bar",
      },
      {
        data: [1, 2, 4, 3],
        type: "spline",
      },
      {
        data: [1, 2, 6],
        type: "pie",
      },
      {
        data: [4, 3, 6],
        type: "area",
      },
      {
        data: [1, 4, 3, 10],
        type: "column",
      },
    ],
  };
  const handleChangeTheme = (event) => {
    setChecked((s) => !s);
    setIsDarkMode(!isDarkMode);
    // setChecked(event.targetchecked);
  };

  //   const resetLayout = () => {
  //     setLayouts([]);
  //   };

  const onLayoutChange = (layout) => {
    saveToLS("layouts", layout);
    setLayouts(layout);
    console.log(layout);
  };

  const [layouts, setLayouts] = useState(obj.lay);
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("changing component to editable page");
    navigate("/edit");
    // setStatic(false);
    // for (let k = 0; k < layouts.length; k++) {
    //   layouts[k].static = false;
    //   layouts[k].isDraggable = true;
    //   layouts[k].isResizable = true;
    // }
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
          {/* {stat ? (
            <button onClick={handleEdit} className="main-buttons">
              <EditOutlined />
            </button>
          ) : (
            <div>
              <button>Save</button>
              <button>go Back</button>
            </div>
          )} */}
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

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

const getOptions = (type, height, data, chosenTheme) => {
  // debugger;
  let backcolor = "white";
  let col = [
    "#7cb5ec",
    "#434348",
    "#90ee7e",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1",
  ];
  let textColor = "black";

  console.log(chosenTheme);
  if (chosenTheme) {
    backcolor = "#2a2a2b";
    col = ["#90ee7e", "#f45b5b", "#7798BF", "#aaeeee"];
    textColor = "white";
  } else {
    backcolor = "white";
    col = [
      "#7cb5ec",
      "#434348",
      "#90ee7e",
      "#f7a35c",
      "#8085e9",
      "#f15c80",
      "#e4d354",
      "#2b908f",
      "#f45b5b",
      "#91e8e1",
    ];
    textColor = "black";
  }
  return {
    chart: {
      type,
      height: height ? height * 2 * 10 : null,
      backgroundColor: backcolor,
      // styledMode: true,
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      },
    },
    title: {
      text: _.startCase(`${type} chart`),
      style: {
        fontFamily: "monospace",
        color: textColor,
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        style: {
          color: textColor,
        },
      },
    },
    series: [
      {
        data: data,
        colorByPoint: true,
        showInLegend: false,
      },
    ],
    colors: col,
    credits: {
      enabled: false,
    },
  };
};
