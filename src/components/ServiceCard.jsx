import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${service._id}`, { state: { service } }); 
    // navigates to detailed page with service data
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all duration-300 service-card">

      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-blue-900 mb-1">{service.name}</h3>
      <p className="text-gray-700 text-sm mb-1">{service.description}</p>
      <p className="text-gray-500 text-xs mb-1">Provider: {service.provider}</p>
      <p className="text-teal-600 font-semibold">{service.price}</p>
    </div>
  );
}
