import "./App.css";
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
