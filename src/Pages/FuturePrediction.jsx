import React from "react";
import { useRef } from "react";
import PredictedMap from "../Components/Maps/Maps-Predicted";
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
          <div className="arrow-container ">
            <div className="arrow" onClick={handleArrowClick}>
              <i className="icon fa fa-chevron-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className="observation-explanation justify-content-center py-5 my-5"
        ref={observeRef}
        data-aos="fade-up"
      >
        <div className="row no-gutters">
          <div className="col-lg-6 pl-5">
            <img src={require("../images/map (2).jpg")} alt="" />
          </div>
          <div className="col-lg-6 my-auto description observation-description">
            <p>
              Stay ahead of potential floods with our future water level
              predictions for rivers in Nepal. Our data takes into account
              various factors including precipitation, river flow, topography,
              and historical data to provide the most accurate predictions
              possible. Stay informed and stay prepared with our data.
            </p>
            <p>With information on:</p>
            <ul className="ml-5">
              <li>Water Level</li>
              <li>Location of Station</li>
              <li>Red Marker to indicate chances of flood</li>
              <li>Green Marker to indicate water level below danger level</li>
              <li>Blue marker to indicate current location</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" observeration section" ref={observeRef}>
        <div className="map-section">
          <PredictedMap />
        </div>
      </div>
    </div>
  );
};

export default FuturePrediction;
