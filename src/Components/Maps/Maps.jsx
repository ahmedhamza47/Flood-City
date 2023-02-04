import React, { useState, useRef } from "react";
import { TileLayer, Marker, MapContainer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { redMarker, blueMarker, greenMarker } from "./MarkerColor";
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

const MarkersMap = () => {
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

  return (
    <div className="map-section-container">
      <h1 className="map-heading text-center py-5" data-aos="fade-up">
        {" "}
        Observe water level at different stations
      </h1>
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
                      polyline: false,
                    }}
                  />
                </FeatureGroup>

                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {river.map((mkr, index) => {
                  return (
                    <div key={index}>
                      <Marker
                        icon={
                          mkr.waterLevel > mkr.dangerLevel
                            ? redMarker
                            : greenMarker
                        }
                        position={mkr.coordinates}
                        eventHandlers={{ click: handleMarkerClick }}
                      >
                        <Popup>
                          {mkr.name} <br />
                          Water Level: {mkr.waterLevel}m <br />
                          {mkr.waterLevel > mkr.dangerLevel && (
                            <span className="dangerLevelText">
                              {" "}
                              Warning: Flood Alert
                            </span>
                          )}
                          {circleVisibility && (
                            <Circle
                              center={mkr.coordinates}
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

                    {/* <Circle
                      center={[27.752927449398864, 85.30272781848907]}
                      pathOptions={redOptions}
                      radius={200}
                    /> */}
                  </>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="row my-4">
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
