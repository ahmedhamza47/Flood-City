import React from "react";
import { useRef } from "react";
import PredictedMap from "../Components/Maps/Maps-Predicted";

const FuturePrediction = () => {
  const observeRef = useRef(null);
  const handleArrowClick = () => {
    observeRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(observeRef, "observeRef");
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Water Level ",
      },
    },
  };

  return (
    <div>
      <div className="river-image">
        <img src={require("../images/prediction.webp")} alt="" />
        <div className="overlay"></div>
        <div className="text-over-images d-flex flex-column align-items-center">
          <div className="title">
            <h1 className="slider-info">
              Predict Future Situations <br />
              for flood in rivers of Nepal
            </h1>
          </div>
          <div className="info">
            <h3> Prediction</h3>
          </div>
          <div className="arrow-container mt-3 ">
            <div className="arrow" onClick={handleArrowClick}>
              <i className="icon fa fa-chevron-down " aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div
          className="observation-explanation py-5 "
          ref={observeRef}
          data-aos="fade-up"
        >
          <h2 className="realtime-heading text-center">Geo Referencing</h2>
          <div className="row mt-5 no-gutters   d-flex flex-lg-row flex-md-column  justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <img
                src={require("../images/georeferncing.png")}
                alt=""
                className="realTimeImg"
              />
            </div>
            <div className="col-lg-6  observation-description">
              <p>
                FloodWarn adds georeferences to the data, so it can be viewed on
                a map. It involves precisely aligning digital data, such as
                river station predictions, with real-world geographic locations
                using a Leaflet map. This enables us to accurately monitor water
                levels and alert people of potential floods. Our system's
                reliance on georeferencing ensures a highly effective and
                reliable means of predicting and preventing disasters.
              </p>
              <p className="mb-1">With information on:</p>
              <ul className="ml-5">
                <li>Maps</li>
                <li>River Water Level</li>
                <li>Location of Station</li>
              </ul>
            </div>
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
