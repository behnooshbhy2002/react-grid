import React, { useState } from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import darkUnica from "highcharts/themes/dark-unica";

import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(RGL);

// Apply the dark theme
darkUnica(Highcharts);

function Main() {
  const [stat, setStatic] = useState(true);

  const resetLayout = () => {
    setLayouts({});
  };

  const onLayoutChange = (layout) => {
    saveToLS("layouts", layout);
    setLayouts(layout);
    console.log(layout);
  };
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
  const [layouts, setLayouts] = useState(obj.lay);

  return (
    <div>
      <button onClick={resetLayout}>Reset Layout</button>
      <ResponsiveReactGridLayout
        className="layout"
        cols={24}
        rowHeight={10}
        layouts={layouts}
        onLayoutChange={onLayoutChange}
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
              }}
              id="container"
              class="highcharts-dashboards-dark "
            >
              <HighchartsReact
                className="responsiveChart"
                highcharts={Highcharts}
                options={getOptions(
                  obj.content[key].type,
                  layData.h,
                  obj.content[key].data
                )}
              />
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
      <button
        onClick={() => {
          console.log("changing");
          setStatic(false);
          for (let k = 0; k < layouts.length; k++) {
            layouts[k].static = false;
          }
        }}
      >
        edit
      </button>
      <button onClick={() => {}}>dark mode</button>
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

const getOptions = (type, height, data) => {
  // debugger;
  return {
    chart: {
      type,
      height: height ? height * 2 * 10 : null,
    },
    title: {
      text: _.startCase(`${type} chart`),
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        data: data,
      },
    ],
  };
};

export default Main;
