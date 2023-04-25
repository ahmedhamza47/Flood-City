import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div className="border-slider">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade carousel-slider"
        data-ride="carousel"
        data-pause="false"
        data-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              src={require("../../images/slider/img-3.webp")}
              className="d-block w-100"
              alt="..."
            />
            <div className="text-over-images">
              <div className="title">
                <h1 className="slider-info">
                  Online media monitoring <br />
                  for flood prediction
                </h1>
              </div>
              <div className="info">
                <h3> Flood Detection</h3>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/slider/img-1.webp")}
              className="d-block w-100"
              alt="..."
            />
            <div className="text-over-images">
              <div className="title">
                <h1 className="slider-info">
                  Online media monitoring <br />
                  <span className="mt-5">for flood prediction</span>
                </h1>
              </div>
              <div className="info">
                <h3>Alert System</h3>
              </div>
            </div>

            <div className="overlay"></div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../../images/slider/img-2.webp")}
              className="d-block w-100"
              alt="..."
            />
            <div className="text-over-images">
              <div className="title">
                <h1 className="slider-info">
                  Online media monitoring <br />
                  for flood prediction
                </h1>
              </div>
              <div className="info">
                <h3> Forecasting</h3>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
