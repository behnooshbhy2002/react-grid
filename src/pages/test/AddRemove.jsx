import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const originalLayouts = getFromLS("layouts") || {};

export default function AddRemoveLayout(props) {
  const [items, setItems] = useState(
    [0, 1, 2, 3, 4].map(function (i, key, list) {
      return {
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === list.length - 1,
      };
    })
  );
  const [newCounter, setNewCounter] = useState(0);
  const [breakpoint, setBreakpoint] = useState(null);
  const [cols, setCols] = useState({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 });

  function onAddItem() {
    console.log("adding", "n" + newCounter);
    setItems((prevItems) => {
      // Add a new item. It must have a unique key!
      return prevItems.concat({
        i: "n" + newCounter,
        x: (prevItems.length * 2) % 12,
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      });
    });
    console.log("behhhhhh");
    console.log(items);
    // Increment the counter to ensure key is always unique.
    setNewCounter((prevNewCounter) => prevNewCounter + 1);
  }

  // We're using the cols coming back from this to calculate where to add new items.
  function onBreakpointChange(breakpoint, cols) {
    setBreakpoint(breakpoint);
    setCols(cols);
  }

  const [layouts, setLayouts] = useState(originalLayouts);

  function onLayoutChange(layout) {
    saveToLS("layouts", layouts);
    setLayouts(layouts);
    console.log(layout);
    // props.onLayoutChange(layout);
  }

  function onRemoveItem(i) {
    console.log("removing", i);
    setItems((prevItems) => _.reject(prevItems, { i: i }));
    console.log(items);
  }

  function createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={() => onRemoveItem(i)}
        >
          x
        </span>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        {...props}
        cols={cols}
      >
        {_.map(items, (el) => createElement(el))}
      </ResponsiveReactGridLayout>
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
