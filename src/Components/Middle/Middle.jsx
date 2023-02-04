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
  console.log("hello");
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
              We provide high quality social media and online media analysis for
              floods and other weather impacts, using the latest advancements of
              AI in natural language processing, speech technology and image
              processing. We have global coverage.
              <br /> <span> </span>
            </p>
          </div>
        </div>
        {/* -------------Middle Section--------------- */}
        <div className="mid-mid-section my-5">
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
                Collect more information via active reporting in Twitter,
                Telegram, WhatsApp, Facebook or a Webform. Analyse the
                crowd-sourced information together with other media
                observations.
              </p>
            </div>
            <div className="col-lg-4" data-aos="fade-left">
              <i className="bi bi-chat-text  icons"></i>

              <p className="mid-description  description">
                We monitor events from multiple platforms in social media, news,
                blogs, forums, web pages. On global scale. Via a dashboard and
                API you get access to a wealth of data from-the-ground.s
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------bottom-section------------------------- */}
        <div className="mid-bottom-section mx-5">
          <div className="justify-content-center text-center">
            <h1 className="heading">How it works</h1>

            <div className="row my-5" data-aos="fade-left">
              <div className="col-lg-4  mb-4">
                <i className="bi bi-check2-square work-icon "></i>
              </div>
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">
                  You select the topic and country
                </h3>
                <p className="bottom-description description">
                  You choose the topic, the countries and the languages that you
                  would like to monitor in the media (social media and and other
                  media sources)
                </p>
              </div>
            </div>

            <div className="row my-5 " data-aos="fade-right">
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">
                  Data preparation and processing
                </h3>
                <p className="bottom-description description">
                  We prepare your data for the topic, country and language of
                  your choice. If we don't have the appropriate classifiers
                  already (e.g. for a less spoken local language) we develop
                  them through a process of annotation and classification of the
                  data.
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
                  You access the data in your personalized dashboard or
                  connected to your own software via our API. Or you can analyse
                  the results from a tailor-made report, for instance holding a
                  detailed account of past events of your topic. Check solutions
                  to see what that looks like.
                </p>
              </div>
            </div>

            <div className="row my-5" data-aos="fade-right">
              <div className="col-lg-8 my-auto">
                <h3 className="bottom-title">
                  On request we develop extra features
                </h3>
                <p className="bottom-description description">
                  Each use-case has different requirements to really make that
                  impact. This can be an additional front-end feature, data
                  triangulation, confidence scoring, or even new crowd-sourcing
                  options. What does your project require more, to make
                  guaranteed impact?
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
