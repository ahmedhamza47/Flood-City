import { Outlet, Route, Routes } from "react-router-dom";
import Accuracy from "./Accuracy/Accuracy";
import "./AdminPage.css";
import MainDash from "./MainDash/MainDash";
import Sidebar from "./SideBar/SideBar";
const Admin = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
