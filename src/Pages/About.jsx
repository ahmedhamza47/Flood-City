import React from "react";
import { TileLayer, Marker, MapContainer, FeatureGroup } from "react-leaflet";
import { Popup } from "react-leaflet";
const About = () => {
  const position = [51.505, -0.09];
  return (
    <div style={{ marginTop: "4cm", marginBottom: "4cm" }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default About;
