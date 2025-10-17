import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // retrieve the service passed from navigation state
  const service = location.state?.service;

  // if the service is missing (e.g., page refreshed directly)
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <p className="text-gray-700 text-lg mb-4">
           Service details not found.
        </p>
        <button
          onClick={() => navigate("/services")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          ← Go Back to Services
        </button>
      </div>
    );
  }

  // service detail display
  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-2xl w-full">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          {service.name}
        </h1>

        <p className="text-gray-700 mb-4">{service.description}</p>

        <p className="text-gray-600 mb-1">
          <strong>Provider:</strong> {service.provider}
        </p>

        <p className="text-gray-600 mb-4">
          <strong>Price:</strong> {service.price}
        </p>

        <button
          onClick={() => navigate("/services")}
          className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          ← Back to Services
        </button>
      </div>
    </div>
  );
}
