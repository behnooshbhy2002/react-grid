import React, { useState } from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import darkUnica from "highcharts/themes/dark-unica";
import edit from "../assets/edit-icon.svg";
// import Switch from "@mui/material/Switch";
import { Switch } from "antd";
import "./Main.css";

import _ from "lodash";
const ReactGridLayout = WidthProvider(RGL);

// Apply the dark theme
// darkUnica(Highcharts);

function Main() {
  const [stat, setStatic] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [editMode, setEditMode] = useState(false);
  const [checked, setChecked] = useState(false);
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

  const resetLayout = () => {
    // console.log(layouts);
    setLayouts([]);
    // console.log(obj.lay);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const onLayoutChange = (layout) => {
    saveToLS("layouts", layout);
    setLayouts(layout);
    console.log(layout);
  };

  const [layouts, setLayouts] = useState(obj.lay);

  const handleEdit = () => {
    console.log("changing");
    setStatic(false);
    for (let k = 0; k < layouts.length; k++) {
      layouts[k].static = false;
      layouts[k].isDraggable = true;
      layouts[k].isResizable = true;
    }
  };
  const mar = [11, 11];
  return (
    <div>
      {/* <Switch
        checked={checked}
        onChange={handleChangeTheme}
        inputProps={{ "aria-label": "controlled" }}
        color="secondary"
      /> */}
      {/* <button onClick={resetLayout}>Reset Layout</button> */}
      <div className="left-buttons">
        <button className="main-buttons">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
          >
            <path d="M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z" />
          </svg>
        </button>
        {stat ? (
          <button onClick={handleEdit} className="main-buttons">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" />
            </svg>
          </button>
        ) : (
          <div>
            <button>Save</button>
            <button>go Back</button>
          </div>
        )}
        <button className="main-buttons">
          <svg viewBox="0 0 21 21" fill="currentColor" height="2em" width="2em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.578 6.487A8 8 0 112.5 10.5M7.5 6.5h-4v-4" />
            </g>
          </svg>
        </button>
        <div className="main-buttons">
          <Switch checked={checked} onChange={handleChangeTheme}></Switch>
        </div>
        <div className="dark-text">
          <span>حالت تاریک</span>
        </div>
      </div>

      <ReactGridLayout
        className="layout"
        cols={24}
        rowHeight={10}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        isBounded={true}
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
      </ReactGridLayout>
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
        text: "Values",
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
      },
    ],
    colors: col,
    credits: {
      enabled: false,
    },
  };
};

export default Main;
