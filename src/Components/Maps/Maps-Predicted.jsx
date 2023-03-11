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
import { Circle, Popup, Polyline } from "react-leaflet";
import useGeolocation from "./useGelolocation";

import L from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { fetchRealTimeData, getPredictedData } from "../API/API";
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
import { Line } from "react-chartjs-2";

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
  const [dates, setDate] = useState(null);
  // const [formattedDate, setFormattedDate] = useState(null);
  const dateInputRef = useRef(null);
  // console.log(dateInputRef);
  // console.log("date", dates);
  let formattedDate = "";
  if (dates !== null && dates !== undefined) {
    const dateObject = new Date(dates); // convert input value to Date object

    console.log(dateObject);
    const year = dateObject.getFullYear();
    const month = `${dateObject.getMonth() + 1}`.padStart(2, "0");
    const day = `${dateObject.getDate()}`.padStart(2, "0");
    formattedDate = `${year}${month}${day}`;
  }
  console.log("formatted", formattedDate);
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
  // console.log("original data", river.datas);

  const handlePredictButtonClick = async () => {
    observeRef.current.scrollIntoView({ behavior: "smooth" });
    const d = await getPredictedData("20220607");
    console.log(d);
    return d.data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["datas"],
    queryFn: () => handlePredictButtonClick(),
  });

  // const refinedData = data?.filter((item) => {
  //   return (
  //     item.danger_level !== null &&
  //     item.warning_level !== null &&
  //     item.waterLevel !== null &&
  //     item.danger_level !== ""
  //   );
  // });
  //console.log(refinedData);
  // const refinedData = {
  //   datas: river.datas.map((data) => {
  //     return {
  //       id: data.id,
  //       danger_level: data.danger_level,
  //       warning_level: data.warning_level,
  //       water_level: data.waterLevel.value,
  //       name: data.name,
  //       basin: data.basin,
  //       longitude: data.longitude,
  //       latitude: data.latitude,
  //     };
  //   }),
  // };

  //console.log("refined data", refinedData);
  const observeRef = useRef(null);

  // --------------------------map section ends -----------------------------------------------

  // ========================graphs section starts  ===========================================================

  //const labels = ["", "February", "March", "April", "May", "June", "July"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Predicted Water Level for Next 7 days",
      },
    },
  };

  const today = new Date();
  // const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const labels = [];

  for (let i = 0; i < 7; i++) {
    const date = today.getDate() + i;
    const month = today.toLocaleDateString("default", { month: "short" });
    const formattedDate = `${month} ${date}`;

    labels.push(` ${formattedDate}`);
  }
  // console.log(labels);
  const waterLevels = ["0.2", "0.223", "0.211", "0.3", "0.21", "0.25", "0.27"];
  const datas = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Water level in (m)",
        data: waterLevels.map((level) => level),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <div className="chart">
        <Line options={options} data={datas} />
      </div>

      <div className="map-section-container">
        <h1 className="map-heading text-center pt-5 pb-3" data-aos="fade-up">
          {" "}
          Predict water level at different stations
        </h1>
        <div className="justify-content-center text-center mb-3">
          <p className="select-date pr-5 mr-3">Select Date:</p>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
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
          * The following data is of 03/11/2023
        </p>
        <div className="container map-container ">
          <div className="row  map-row">
            <div className="col text-center">
              <div className="col">
                <MapContainer center={center} zoom={7} ref={mapRef}>
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
                  if(isLoading){<div> Loadingss</div>}
                  if(isError){<div>Error</div>}
                  else
                  {
                    <div>
                      {data?.map((station, index) => {
                        return (
                          <div key={index}>
                            <Marker
                              icon={
                                Number(station?.water_level) >
                                Number(station?.danger_level)
                                  ? redMarker
                                  : Number(station?.water_level) >
                                    Number(station?.warning_level)
                                  ? orangeMarker
                                  : greenMarker
                              }
                              position={[station?.latitude, station?.longitude]}
                              eventHandlers={{ click: handleMarkerClick }}
                            >
                              <Popup>
                                {station?.name} <br />
                                Water Level:
                                {Number(station?.waterLevel?.value).toFixed(2)}m
                                <br />
                                {Number(station?.water_level) >
                                Number(station?.danger_level) ? (
                                  <p style={{ margin: 0 }}>
                                    Status:
                                    <span className="dangerLevelText">
                                      Flood ALert
                                    </span>
                                  </p>
                                ) : Number(station?.water_level) >
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

export default PredictedMap;
// {
//   /* <Circle
//                       center={[27.752927449398864, 85.30272781848907]}
//                       pathOptions={redOptions}
//                       radius={200}
//                     /> */
// }
