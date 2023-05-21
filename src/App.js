import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RiverWatch from "./Pages/RiverWatch";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FuturePrediction from "./Pages/FuturePrediction";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Analysis } from "./Pages/Analysis";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import Admin from "./Pages/Admin/AdminPage";
import ClientPage from "./ClientPage";
import MainDash from "./Pages/Admin/MainDash/MainDash";
import AdminRealTime from "./Pages/Admin/Accuracy/AdminRealTimeForm";
import Index from "./Pages/Admin/Accuracy/Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ClientPage />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/" element={<MainDash />} />
            <Route path="/admin/realtime" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
