import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { serviceData } from "./data"; // your service data

function ProviderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the provider
  let provider = null;
  Object.values(serviceData).forEach((service) => {
    const found = service.providers.find((p) => p.id === parseInt(id));
    if (found) provider = found;
  });

  if (!provider) return <p className="text-center mt-10">Provider not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 font-semibold hover:underline"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600">{provider.name}</h2>
        <p className="text-gray-600 mt-2">{provider.location}</p>
        <p className="text-gray-700 font-medium mt-1">{provider.completed} services completed</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
          <p className="text-gray-700">{provider.details.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Packages</h3>
          {provider.details.packages.map((pkg, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-3">
              <span>{pkg.type}</span>
              <span>{pkg.price}</span>
              <span>⭐ {pkg.rating}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Reviews</h3>
          {provider.details.reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-3 rounded-lg mb-3">
              <p className="font-medium">{r.user} <span className="text-gray-500 text-sm">• {r.date}</span></p>
              <p className="text-yellow-500 mt-1">⭐ {r.rating}</p>
              <p className="text-gray-700 mt-1">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProviderProfile;
