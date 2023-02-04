import React from "react";
import { useRef } from "react";
import Maps from "../Components/Maps/Maps";
const FuturePrediction = () => {
  const observeRef = useRef(null);
  const handleArrowClick = () => {
    observeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="river-image">
        <img src={require("../images/prediction.webp")} alt="" />
        <div className="overlay"></div>
        <div className="text-over-images">
          <div className="title">
            <h1 className="slider-info">
              Predict Future Situations <br />
              for flood in rivers of Nepal
            </h1>
          </div>
          <div className="info">
            <h3> Prediction</h3>
          </div>
          <div class="arrow-container ">
            <div class="arrow" onClick={handleArrowClick}>
              <i class="icon fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
      <div className=" observeration section" ref={observeRef}>
        <div className="map-section">
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default FuturePrediction;
