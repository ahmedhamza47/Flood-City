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
import { river } from "../../Data";
import L from "leaflet";

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
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

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

  const refinedData = {
    datas: river.datas.map((data) => {
      return {
        id: data.id,
        danger_level: data.danger_level,
        warning_level: data.warning_level,
        water_level: data.waterLevel.value,
        name: data.name,
        basin: data.basin,
        longitude: data.longitude,
        latitude: data.latitude,
      };
    }),
  };

  //console.log("refined data", refinedData);
  const observeRef = useRef(null);
  const handleButtonClick = () => {
    observeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
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
          onClick={() => handleButtonClick()}
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
                {refinedData?.datas?.map((station, index) => {
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
                          {Number(station.water_level).toFixed(2)}m
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
                              <span className="steadyText">Steady Flow</span>
                            </p>
                          )}
                          {circleVisibility && (
                            <Circle
                              center={[station?.latitude, station?.longitude]}
                              pathOptions={redOptions}
                              radius={1000}
                            />
                          )}
                        </Popup>
                      </Marker>
                    </div>
                  );
                })}

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
  );
};

export default PredictedMap;
{
  /* <Circle
                      center={[27.752927449398864, 85.30272781848907]}
                      pathOptions={redOptions}
                      radius={200}
                    /> */
}
