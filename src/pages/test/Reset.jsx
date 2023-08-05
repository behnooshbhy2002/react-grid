import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

function LocalStorageLayout(props) {
  const [layout, setLayout] = useState(() => {
    return JSON.parse(JSON.stringify(getFromLS("layout") || []));
  });

  const resetLayout = () => {
    setLayout([]);
  };

  const onLayoutChange = (newLayout) => {
    saveToLS("layout", newLayout);
    setLayout(newLayout);
    props.onLayoutChange(newLayout); // updates status display
  };

  return (
    <div>
      <button onClick={resetLayout}>Reset Layout</button>
      <ReactGridLayout
        {...props}
        layout={layout}
        onLayoutChange={onLayoutChange}
      >
        <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text">1</span>
        </div>
        <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
          <span className="text">2</span>
        </div>
        <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
          <span className="text">3</span>
        </div>
        <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0 }}>
          <span className="text">4</span>
        </div>
        <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0 }}>
          <span className="text">5</span>
        </div>
      </ReactGridLayout>
    </div>
  );
}

LocalStorageLayout.defaultProps = {
  className: "layout",
  cols: 12,
  rowHeight: 30,
  onLayoutChange: function () {},
};

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then((fn) => fn.default(LocalStorageLayout));
// }

export default LocalStorageLayout;
