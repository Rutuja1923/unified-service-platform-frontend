import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ServiceProviderDashboard() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]); // List of services by this provider

  const handleAddService = () => {
    navigate("/add-service");
  };

  const handleAddProfile = () => {
    alert("Profile creation functionality goes here.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Service Provider Dashboard
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleAddService}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Service
        </button>
        <button
          onClick={handleAddProfile}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Add Profile
        </button>
      </div>

      <div>
        {services.length === 0 ? (
          <p className="text-gray-600">
            No services added yet. Click "Add Service" to start.
          </p>
        ) : (
          <ul className="space-y-3">
            {services.map((service) => (
              <li
                key={service.id}
                className="border p-3 rounded shadow-sm flex justify-between items-center"
              >
                <span>{service.name}</span>
                {/* You can later add edit/delete buttons here */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceProviderDashboard;
