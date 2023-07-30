import "./App.css";
// import { Main } from "./pages/Main";
import Main from "./pages/Main";
import Chart from "./pages/Charts";
import AddRemoveLayout from "./pages/AddRemove";
import MyChart from "./pages/DarkMode";
import NoDraggingLayout from "./pages/Notdraggable";
function App() {
  return (
    <div className="App">
      {/* <NoDraggingLayout></NoDraggingLayout> */}
      <Main></Main>
      {/* <MyChart></MyChart> */}
      {/* <Chart></Chart> */}
      {/* <AddRemoveLayout></AddRemoveLayout> */}
    </div>
  );
}

export default App;
