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
function App() {
  const footerRef = useRef(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/" element={<RiverWatch />} />
          <Route path="/prediction/" element={<FuturePrediction />} />
          <Route path="/analysis/" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
      <Footer footerRef={footerRef} />
      <ToastContainer />
    </>
  );
}

export default App;
