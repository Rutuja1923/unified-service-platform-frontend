import React from "react";
import Map from "../components/Map";

export default function MapPage() {
  const mockServices = [
    { id: 1, name: "Plumbing", lat: 28.6139, lng: 77.209 },
    { id: 2, name: "Cleaning", lat: 28.7041, lng: 77.1025 },
    { id: 3, name: "Electric Work", lat: 28.5355, lng: 77.391 },
  ];

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Service Locations</h2>
      <Map services={mockServices} />
    </div>
  );
}
