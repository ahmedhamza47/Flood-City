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
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }
  return (
    <div className="map-section-container">
      <h1 className="map-heading text-center py-5" data-aos="fade-up">
        {" "}
        Observe water level at different stations
      </h1>
      <p className="sub-info">
        * The following data is of 02/13/2023 Time: 6:12 AM
      </p>
      <div className="container map-container">
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
                          {station.datetime}
                          {station?.name} <br />
                          Water Level: {Number(station?.value).toFixed(2)}m{" "}
                          <br />
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
        <div className="row py-5">
          <div className="col d-flex justify-content-center">
            <button
              className="btn btn-primary btn-location"
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

export default MarkersMap;
{
  /* <Circle
                      center={[27.752927449398864, 85.30272781848907]}
                      pathOptions={redOptions}
                      radius={200}
                    /> */
}
