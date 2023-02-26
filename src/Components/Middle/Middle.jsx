import React from "react";
import "./Middle.css";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init({
  offset: 120,
  duration: 1200,
  once: true,
});
const Middle = () => {
  //console.log("hello");
  return (
    <div>
      <div className="container">
        <div className="mid-top-section">
          <div
            className="justify-content-center text-center"
            data-aos="fade-up"
          >
            <h1 className="heading">What we do</h1>

            <p className="main-description description">
              Get accurate water level information and predictions for rivers in
              Nepal with our website. Our machine learning algorithms take into
              account various factors for the most accurate predictions
              possible.
              <br /> <span> </span>
            </p>
          </div>
        </div>
        {/* -------------Middle Section--------------- */}
        <div className="mid-mid-section justify-content-center text-center pr-4 my-5">
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <i className="bi bi-graph-up-arrow  icons "></i>

              <p className="mid-description  description">
                We provide fact-finding analyses for single events with
                timelines, perceptions, responses and other related
                developments. Dig deeper to truly understand the local
                situation.
              </p>
            </div>
            <div className="col-lg-4" data-aos="zoom-in">
              <i className="bi bi-bar-chart-line-fill icons "></i>

              <p className="mid-description  description">
                We provide accurate water level information and predictions for
                rivers in Nepal. Stay ahead of potential floods and help manage
                water resources with our machine learning algorithms.
              </p>
            </div>
            <div className="col-lg-4" data-aos="fade-left">
              <i className="bi bi-chat-text  icons"></i>

              <p className="mid-description  description">
                Stay informed with our blog and social media on flood prediction
                and water level monitoring. Expert insights and real-time
                updates at your fingertips.
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------bottom-section------------------------- */}
        <div className="mid-bottom-section mx-4 pr-3">
          <div className="justify-content-center text-center">
            <h1 className="heading">How it works</h1>

            <div className="row my-5" data-aos="fade-left">
              <div className="col-lg-4  mb-4">
                <i className="bi bi-check2-square work-icon "></i>
              </div>
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">You provide the location</h3>
                <p className="bottom-description description">
                  Easily monitor water levels. Choose location, select language,
                  see real-time updates. Check future levels and prepare for
                  floods with our web app.
                </p>
              </div>
            </div>

            <div className="row my-5 " data-aos="fade-right">
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">
                  Data preparation and processing
                </h3>
                <p className="bottom-description description">
                  Efficient flood prediction is achieved through precise data
                  preparation with WRF and Python. If necessary, we also develop
                  appropriate classifiers through a process of data annotations
                  and classifications.
                </p>
              </div>
              <div className="col-lg-4">
                <i className="bi bi-tools work-icon"></i>
              </div>
            </div>

            <div className="row my-5" data-aos="fade-left">
              <div className="col-lg-4">
                <i className="bi bi-person-badge-fill work-icon"></i>
              </div>
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">You get access</h3>
                <p className="bottom-description description">
                  You get access to real-time water level information and flood
                  predictions for Nepal through our web application.
                </p>
              </div>
            </div>

            <div className="row my-5" data-aos="fade-right">
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">
                  On request we develop extra features
                </h3>
                <p className="bottom-description description">
                  Enhance your experience with custom solutions. Request
                  additional features for a tailored solution in monitoring
                  water levels and predicting floods. Get in touch with us
                  today.
                </p>
              </div>
              <div className="col-lg-4">
                <i className="bi bi-airplane-fill work-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------fixed section------------------ */}
      <div className="fixed-background  ">
        <div className="fixed-wrap">
          <div className="fixed"></div>
          <div className="color-overlay"> </div>
          <div className="text-over-image">
            <span className="alert">We Alert , </span>
            <span className="listen">
              {" "}
              <br />
              People Listen .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
