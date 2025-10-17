import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ services }) {
  // Fallback if services array is empty
  const serviceList = services.length ? services : [
    { id: 1, name: "Plumbing", lat: 28.6139, lng: 77.209 },
    { id: 2, name: "Cleaning", lat: 28.7041, lng: 77.1025 },
    { id: 3, name: "Electric Work", lat: 28.5355, lng: 77.391 },
  ];

  return (
    <MapContainer center={[28.6139, 77.209]} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {serviceList.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]}>
          <Popup>{s.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
