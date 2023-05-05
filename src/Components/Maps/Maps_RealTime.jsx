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
import { fetchRealTimeData, pushRealTimeData } from "../API/API";
import { useQuery } from "@tanstack/react-query";
import { FaMapMarkerAlt } from "react-icons/fa";
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const MarkersMap = () => {
  //-----------------------useQuery section-------------------------
  const { data, isLoading, isError } = useQuery({
    queryKey: ["datas"],
    queryFn: () => fetchRealTimeData(),
    staleTime: Infinity,
    onError: (error) => {
      console.log(error);
    },
  });
  //--
  //console.log("original data", data?.data);

  // const newestRefinedData = refinedData?.sort(
  //   (a, b) => new Date(b.datetime) - new Date(a.datetime)
  // );
  // const newestData = newestRefinedData;
  // console.log("refined data....", newestData);

  //----------------------------------------------------------------
  //--------------------------- maps sections--------------------------
  const location = useGeolocation();
  // console.log("locattion", location);

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
  // if (isLoading) return <div> Loading....</div>;
  // if (isError) return <div> errorr....</div>;

  // const Refineddatas = [
  //   {
  //     id: 121,
  //     date: "2023-03-11T01:15:00+00:00",
  //     name: "Babai",
  //   },

  //   {
  //     id: 120,
  //     date: "2023-08-06T01:15:00+00:00",
  //     name: "Karnali",
  //   },
  //   {
  //     id: 121,
  //     date: "2023-03-09T01:15:00+00:00",
  //     name: "Mechi",
  //   },
  // ];
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error</p>;
  // }
  return (
    <div className=" map-section-container ">
      <div className="container d-flex flex-column align-items-center ">
        <div data-aos="fade-up">
          <h2 className="map-heading text-center pt-5 pb-3">
            End-To-End Information Processing
          </h2>
          <div className="d-flex flex-column align-items-center">
            <p className="text-center col-lg-10  par">
              FloodWarn analyzes and processes water-related information from a
              large amout of data, and disseminates the results of these
              analysis through a dashboard and an API. Our systems are developed
              in collaboration with both the academic and non-academic
              institutions and features Gradient Boosting Algorithm. In this
              section we present one of the most important features of the
              software.
              <br />
            </p>

            <div>
              <div className="d-flex  mx-5 my-3 par">
                <img
                  src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png"
                  alt=""
                  className="marker-img mx-3 "
                />
                <p className="my-auto">
                  Blue marker indicates Current Location.
                </p>
              </div>
              <div className="d-flex mx-5 my-3 par">
                <img
                  src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png"
                  alt=""
                  className="marker-img mx-3 "
                />
                <p className="my-auto">
                  Green marker indicates Water level below warning level.
                </p>
              </div>

              <div className=" d-flex mx-5 my-3 par">
                <img
                  src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png"
                  alt=""
                  className="marker-img mx-3"
                />
                <p className="my-auto">
                  Yellow marker indicates Water level above warning level.
                </p>
              </div>
              <div className=" d-flex mx-5 mt-3 mb-3 par">
                <img
                  src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
                  alt=""
                  className="marker-img mx-3"
                />
                <p className="my-auto">
                  Red marker indicates Water level above danger level.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5  pt-5">
          <div className="d-flex flex-row  align-middle justify-content-end   pl-5 ">
            <button
              className="btn btn-primary btn-location ml-3 mr-3 pl-1  "
              onClick={showMyLocation}
            >
              <FaMapMarkerAlt fill="white" className="mr-2" />
              Locate Me
            </button>
          </div>
        </div>
        <div className="container map-container mb-5 mt-3 pb-5">
          <div className="row  map-row">
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
              {data?.map((station, index) => {
                return (
                  <div key={index}>
                    <Marker
                      icon={
                        Number(station?.value) > Number(station?.danger_level)
                          ? redMarker
                          : Number(station?.value) >
                            Number(station?.warning_level)
                          ? orangeMarker
                          : greenMarker
                      }
                      position={[station?.latitude, station?.longitude]}
                      eventHandlers={{ click: handleMarkerClick }}
                    >
                      <Popup>
                        {new Intl.DateTimeFormat("en-US", {
                          timeZone: "Asia/Kathmandu",
                          dateStyle: "medium",
                          timeStyle: "medium",
                        }).format(
                          new Date(station.datetime.split("+")[0])
                        )}{" "}
                        <br />
                        Water Level: {Number(station?.value).toFixed(2)}m <br />
                        {station?.name} <br />
                        {Number(station?.value) >
                          Number(station?.danger_level) && (
                          <span className="dangerLevelText">
                            {" "}
                            Warning: Flood Alert
                          </span>
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
    </div>
  );
};

export default MarkersMap;

/* <Circle
                      center={[27.752927449398864, 85.30272781848907]}
                      pathOptions={redOptions}
                      radius={200}
                    /> */
