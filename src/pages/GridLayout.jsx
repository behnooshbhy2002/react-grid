import React from "react";
import RGL, { WidthProvider, Responsive } from "react-grid-layout";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
const ReactGridLayout = WidthProvider(RGL);
export default function GridLayout(props) {
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
