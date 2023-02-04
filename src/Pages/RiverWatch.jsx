import React, { useRef } from "react";
import "./RiverWatch.css";
import Maps from "../Components/Maps/Maps";
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
          <div class="arrow-container ">
            <div class="arrow" onClick={handleArrowClick}>
              <i class="icon fa fa-chevron-down" aria-hidden="true"></i>
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
              We monitor social media and media websites, including over 150,000
              newspages, blogs, forums and message boards worldwide. And where
              needed, we add any further media data on request, as long as it is
              in the public domain or accessible by your own accounts (such as
              your own Facebook page). On the basis of the combination of all
              available media data, we detect old and new events and provide
              immediate from-the-ground information, with global coverage. We
              specialize in floods and water, which includes mudflows,
              landslides, heavy rains, hurricanes, water quality and droughts.
              Other topics we monitor on request.
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
        <div className="map-section">
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default RiverWatch;
