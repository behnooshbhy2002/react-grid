import React, { useState } from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
const ReactGridLayout = WidthProvider(RGL);
export default function GridLayout(props) {
  const [layouts, setLayouts] = useState(props.obj.lay);

  const onLayoutChange = (layout) => {
    // saveToLS("layouts", layout);
    setLayouts(layout);
    console.log(layout);
  };
  const mar = [11, 11];
  return (
    <div>
      <ReactGridLayout
        className="layout"
        cols={24}
        rowHeight={10}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        margin={mar}
      >
        {layouts.map((layData, key) => {
          {
            /* {
            console.log(layData);
          } */
          }
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
                static: props.view,
                isDraggable: !props.view,
                isResizable: !props.view,
              }}
              id="container"
              class="highcharts-dashboards"
            >
              <HighchartsReact
                className="responsiveChart"
                highcharts={Highcharts}
                options={getOptions(
                  props.obj.content[key].type,
                  layData.h,
                  props.obj.content[key].data,
                  props.Dark
                )}
              />
            </div>
          );
        })}
      </ReactGridLayout>
    </div>
  );
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
