import React, { useState, useRef} from "react";
import { TileLayer, Marker, MapContainer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { toast } from "react-toastify";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen";
import "react-toastify/dist/ReactToastify.css";
import {
  redMarker,
  blueMarker,
  greenMarker,
  orangeMarker,
} from "./MarkerColor";
import { EditControl } from "react-leaflet-draw";
import { Circle, Popup } from "react-leaflet";
import useGeolocation from "./useGelolocation";

import L from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { getPredictedData } from "../API/API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const PredictedMap = () => {
  //-----------------------form section-------------------------
  const [selectedDate, setSelectedDate] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const dateInputRef = useRef(null);
  const [dateInfo, displayDateInfo] = useState(false);
  const navigate = useNavigate();

  const handlePredictButtonClick = async () => {
    if (selectedDate) {
      displayDateInfo(true);
      console.log(dateInfo, "dateInfo");
      const formattedDate = formatDate(selectedDate);
      const predictedData = await handleButtonClick(formattedDate);
      navigate("/prediction/", { state: { predictedData } });
    } else {
      console.log("error");
      toast.error(" Please select a valid date !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const formatDate = (date) => {
    if (!date) {
      return null;
    }
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = `${dateObject.getMonth() + 1}`.padStart(2, "0");
    const day = `${dateObject.getDate()}`.padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const handleButtonClick = async (formattedDate) => {
    if (!formattedDate) {
      return null;
    }
    try {
      const response = await getPredictedData(formattedDate);
      // console.log("...", response);
      setResponseData(response);
      observeRef.current.scrollIntoView({ behavior: "smooth" });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch predicted data");
    }
  };
  const { isLoading, isError } = useQuery({
    queryKey: ["datas", selectedDate],
    queryFn: () => handleButtonClick(),
  });

  //----------------------------------------------------------------
  //--------------------------- maps sections--------------------------
  const location = useGeolocation();
  const [circleVisibility, setCircleVisibility] = useState(false);
  const center = {
    lat: 28.3974,
    lng: 84.1258,
  };
  const mapRef = useRef(null);
  const _created = (e) => {
    console.log(e);
  };
  const redOptions = {
    color: "red",
  };
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      //   console.log(mapRef.current.flyTo);
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        17,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  const handleMarkerClick = () => {
    setCircleVisibility(!circleVisibility);
  };

  const observeRef = useRef(null);

  // --------------------------map section ends -----------------------------------------------

  return (
    <div className=" map-section-container ">
      <div className="container d-flex flex-column align-items-center">
        <div data-aos="fade-up">

      
        <h2 className="map-heading text-center pt-5 pb-3" >
          {" "}
          Predict Future Water Levels
        </h2>
        <div className="d-flex flex-column align-items-center">
          <p className="text-center col-lg-10 pb-3 " style={{ fontSize: "1rem" }}>
            The system is designed to predict the water levels at different
            locations or stations, which will help people in those areas to
            prepare for potential flooding. The prediction model uses various
            data sources, such as historical water levels, weather forecasts,
            and river flow rates, to provide accurate and timely predictions. By
            using this system, people can stay informed about the potential
            risks and take necessary precautions to minimize the damage caused
            by flooding.
            <br />
          </p>
          </div></div>
          <div className="w-100 mt-5">
            <div className="d-flex flex-row  align-middle justify-content-end   pl-5 mb-3">
              <p className="select-date d-flex flex-row align-items-center ">
                Select Date:
              </p>
              <input
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                ref={dateInputRef}
                className="input mx-3"
              />{" "}
              <br />
              <button
                className="btn btn-primary  "
                onClick={() => handlePredictButtonClick()}
              >
                {" "}
                Predict
              </button>
              <button
                className="btn btn-primary btn-location ml-3 mr-5 pl-1 pr-2 "
                onClick={showMyLocation}
              >
              <FaMapMarkerAlt fill="white" className='mr-1'/>
                Locate Me
              </button>
            </div>
          </div>
          <div className="justify-content-start text-left">
            {dateInfo && (
              <p className="sub-info" ref={observeRef}>
                * The map shows water level of {selectedDate}
              </p>
            )}
          </div>
          <div className="container map-container ">
            <div className="row map-row">
              <div className="col text-center">
                <div className="col">
                  <MapContainer
                    center={center}
                    zoom={7}
                    ref={mapRef}
                    fullscreenControl={true}
                    attributionControl={false}
                  >
                    <FeatureGroup>
                      <EditControl
                        position="bottomleft"
                        onCreated={_created}
                        draw={{
                          rectangle: false,
                          circle: false,
                          circlemarker: false,
                          polygon: false,
                        }}
                      />
                    </FeatureGroup>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {
                      <div>
                        {responseData &&
                          responseData?.map((station, index) => {
                            return (
                              <div key={index}>
                                <Marker
                                  icon={
                                    Number(station?.value) >
                                    Number(station?.danger_level)
                                      ? redMarker
                                      : Number(station?.value) >
                                        Number(station?.warning_level)
                                      ? orangeMarker
                                      : greenMarker
                                  }
                                  position={[
                                    station?.latitude,
                                    station?.longitude,
                                  ]}
                                  eventHandlers={{ click: handleMarkerClick }}
                                >
                                  <Popup>
                                    {station?.name} <br />
                                    Water Level:
                                    {Number(station?.value).toFixed(2)}m
                                    <br />
                                    {Number(station?.value) >
                                    Number(station?.danger_level) ? (
                                      <p style={{ margin: 0 }}>
                                        Status:
                                        <span className="dangerLevelText">
                                          Flood ALert
                                        </span>
                                      </p>
                                    ) : Number(station?.value) >
                                      Number(station?.warning_level) ? (
                                      <p style={{ margin: 0 }}>
                                        Status:
                                        <span className="warningText">
                                          Chance of Flood
                                        </span>
                                      </p>
                                    ) : (
                                      <p style={{ margin: 0 }}>
                                        Status :
                                        <span className="steadyText">
                                          Steady Flow
                                        </span>
                                      </p>
                                    )}
                                    {circleVisibility && (
                                      <Circle
                                        center={[
                                          station?.latitude,
                                          station?.longitude,
                                        ]}
                                        pathOptions={redOptions}
                                        radius={1000}
                                      />
                                    )}
                                  </Popup>
                                </Marker>
                              </div>
                            );
                          })}
                      </div>
                    }
                    {location.loaded && !location.error && (
                      <>
                        <Marker
                          icon={blueMarker}
                          position={[
                            location.coordinates.lat,
                            location.coordinates.lng,
                          ]}
                        >
                          <Popup>Current Location</Popup>
                        </Marker>
                      </>
                    )}
                  </MapContainer>
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col d-flex justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PredictedMap;
