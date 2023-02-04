import React from "react";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import Middle from "../Components/Middle/Middle";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  return (
    <div>
      <div className="header">
        <Slider />
      </div>
      <div className="middle">
        <Middle />
      </div>
    </div>
  );
};

export default Home;
