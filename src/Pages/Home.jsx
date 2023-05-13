import React from "react";
import Slider from "../Components/Slider/Slider";
import Middle from "../Components/Middle/Middle";
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
