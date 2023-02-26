import React, { useRef } from "react";
import "./RiverWatch.css";
import MarkersMap from "../Components/Maps/Maps_RealTime";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 120,
  duration: 1200,
  once: true,
});
const RiverWatch = () => {
  const observeRef = useRef(null);
  const handleArrowClick = () => {
    observeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="river-image">
        <img src={require("../images/riverWatch.jpg")} alt="" />
        <div className="overlay"></div>
        <div className="text-over-images">
          <div className="title">
            <h1 className="slider-info">
              Explore current situation <br />
              for flood in rivers of Nepal
            </h1>
          </div>
          <div className="info">
            <h3> Observation</h3>
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
              Stay informed with real-time water level information for rivers in
              Nepal, updated every 5 minutes. Get ahead of potential floods with
              our accurate future predictions. Explore our data and stay
              prepared.
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

      <div className=" observeration section">
        <div className="map-section ">
          <MarkersMap />
        </div>
      </div>
    </div>
  );
};

export default RiverWatch;
