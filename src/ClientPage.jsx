import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import RiverWatch from "./Pages/RiverWatch";
import Home from "./Pages/Home";

import FuturePrediction from "./Pages/FuturePrediction";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Analysis } from "./Pages/Analysis";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
const ClientPage = () => {
    const footerRef = useRef(null);

  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/watch/" element={<RiverWatch />} />
        <Route path="/prediction/" element={<FuturePrediction />} />
        <Route path="/analysis/" element={<Analysis />} />

      </Routes>
      <Footer footerRef={footerRef} />

    </>
  );
};

export default ClientPage;
