import "./App.css";
// import { Main } from "./pages/Main";
import Main from "./pages/Main";
import Chart from "./pages/Charts";
import AddRemoveLayout from "./pages/AddRemove";
import MyChart from "./pages/DarkMode";
import NoDraggingLayout from "./pages/Notdraggable";
import LocalStorageLayout from "./pages/Reset";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import DashboardView from "./pages/DashboardView";
import DashboardEdit from "./pages/DashboardEdit";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<DashboardEdit></DashboardEdit>}></Route>
          <Route
            path="/dashboard"
            element={<DashboardView></DashboardView>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
