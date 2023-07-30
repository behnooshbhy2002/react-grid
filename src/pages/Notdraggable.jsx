import React, { useState, useMemo } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

const NoDraggingLayout = ({
  className = "layout",
  isDraggable = false,
  isResizable = false,
  items = 50,
  cols = 12,
  rowHeight = 30,
  onLayoutChange = () => {},
}) => {
  const [layout, setLayout] = useState(() => generateLayout());

  const generateDOM = useMemo(
    () =>
      _.map(_.range(items), (i) => (
        <div key={i}>
          <span className="text">{i}</span>
        </div>
      )),
    [items]
  );

  function generateLayout() {
    return _.map(new Array(items), (item, i) => {
      const y = _.result({ y: rowHeight }, "y");
      return {
        x: (i * 2) % cols,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString(),
      };
    });
  }

  function handleLayoutChange(layout) {
    setLayout(layout);
    onLayoutChange(layout);
  }

  return (
    <ReactGridLayout
      layout={layout}
      onLayoutChange={handleLayoutChange}
      className={className}
      isDraggable={isDraggable}
      isResizable={isResizable}
      cols={cols}
      rowHeight={rowHeight}
    >
      {generateDOM}
    </ReactGridLayout>
  );
};

export default NoDraggingLayout;
