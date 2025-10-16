import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-800">{service.name}</h3>
        <p className="text-gray-600 mt-2">{service.description}</p>
        <p className="mt-3 text-sm text-gray-500">Category: {service.category}</p>
        <p className="mt-2 font-bold text-blue-700">{service.price}</p>
        <p className="text-sm text-gray-600 mt-1">By {service.provider}</p>
      </div>
    </div>
  );
}
