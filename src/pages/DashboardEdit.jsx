import React, { useState, useEffect } from "react";
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
        setIsDarkMode(result?.dark);
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
        </div>
      </nav>
      <GridLayout obj={posts} Dark={isDarkMode} view={false}></GridLayout>
    </div>
  );
}
