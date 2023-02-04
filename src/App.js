import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RiverWatch from "./Pages/RiverWatch";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import FuturePrediction from "./Pages/FuturePrediction";
import { Auth0Provider } from "@auth0/auth0-react";
import About from "./Pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/" element={<RiverWatch />} />
          <Route path="/prediction/" element={<FuturePrediction />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
