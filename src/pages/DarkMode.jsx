import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import darkUnica from "highcharts/themes/dark-unica";

// Apply the dark theme
darkUnica(Highcharts);

const MyChart = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const options = {
    chart: {
      type: "line",
      renderTo: "container",
    },
    title: {
      text: "My Chart Title",
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
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [1, 3, 2, 4, 5, 3, 4, 2, 5, 6, 4, 3],
      },
    ],
  };

  // Toggle between light and dark themes
  if (isDarkMode) {
    Highcharts.setOptions({
      chart: {
        backgroundColor: "#2a2a2b",
      },
      colors: ["#90ee7e", "#f45b5b", "#7798BF", "#aaeeee"],
      plotOptions: {
        series: {
          borderColor: "#303030",
        },
      },
    });
  } else {
    Highcharts.setOptions({
      chart: {
        backgroundColor: "white",
      },
      colors: [
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
      ],
      plotOptions: {
        series: {
          borderColor: "#e6e6e6",
        },
      },
    });
  }

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      {isDarkMode && (
        <button onClick={() => setIsDarkMode(false)}>
          Return to Light Mode
        </button>
      )}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MyChart;
