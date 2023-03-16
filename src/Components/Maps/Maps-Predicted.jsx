import React, { useState, useRef } from "react";
import { TileLayer, Marker, MapContainer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
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
  const navigate = useNavigate();

  const handlePredictButtonClick = async () => {
    const formattedDate = formatDate(selectedDate);
    const predictedData = await handleButtonClick(formattedDate);
    navigate("/prediction/", { state: { predictedData } });
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
      console.log("...", response);
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
  // const { data, isLoading, isError } = useQuery(
  //   ["predictedData", selectedDate],
  //   handleButtonClick,
  //   {
  //     enabled: false,
  //   }
  // );

  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("datasss", responseData);
  //----------------------------------------------------------------
  //--------------------------- maps sections--------------------------
  const location = useGeolocation();
  const [circleVisibility, setCircleVisibility] = useState(false);
  const center = {
    lat: 28.3974,
    lng: 84.1258,
  };
  const mapRef = useRef();

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
    <div>
      <div className="map-section-container">
        <h1 className="map-heading text-center pt-5 pb-3" data-aos="fade-up">
          {" "}
          Predict water level at different stations
        </h1>
        <div className="justify-content-center text-center mb-3">
          <p className="select-date pr-5 mr-3">Select Date:</p>
          <input
            type="date"
            onChange={(e) => setSelectedDate(e.target.value)}
            ref={dateInputRef}
            className="input"
          />{" "}
          <br />
          <button
            className="btn btn-primary mt-3 "
            onClick={() => handlePredictButtonClick()}
          >
            {" "}
            Predict
          </button>
        </div>
        <p className="sub-info" ref={observeRef}>
          * The following data is of {selectedDate}
        </p>
        <div className="container map-container ">
          <div className="row  map-row">
            <div className="col text-center">
              <div className="col">
                <MapContainer
                  center={center}
                  zoom={7}
                  ref={mapRef}
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
                  if(isLoading){<div> Loading</div>}
                  else
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
            <div className="col d-flex justify-content-center">
              <button
                className="btn btn-primary btn-location "
                onClick={showMyLocation}
              >
                Locate Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {isError && <p>Error fetching data</p>}
//       {data && <p>{data}</p>}
//     </div>
//   );
// };

export default PredictedMap;
// {
//   /* <Circle
//                       center={[27.752927449398864, 85.30272781848907]}
//                       pathOptions={redOptions}
//                       radius={200}
//                     /> */
// }
