import Accuracy from "./Accuracy/Accuracy";
import "./AdminPage.css";
import MainDash from "./MainDash/MainDash";
import Sidebar from "./SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
