import "./App.css";
// import { Main } from "./pages/Main";
import Main from "./pages/Main";
import Chart from "./pages/Charts";
import AddRemoveLayout from "./pages/AddRemove";
import MyChart from "./pages/DarkMode";
import NoDraggingLayout from "./pages/Notdraggable";
import LocalStorageLayout from "./pages/Reset";
function App() {
  return (
    <div className="App">
      {/* <LocalStorageLayout></LocalStorageLayout> */}
      {/* <NoDraggingLayout></NoDraggingLayout> */}
      <Main></Main>
      {/* <MyChart></MyChart> */}
      {/* <Chart></Chart> */}
      {/* <AddRemoveLayout></AddRemoveLayout> */}
    </div>
  );
}

export default App;
