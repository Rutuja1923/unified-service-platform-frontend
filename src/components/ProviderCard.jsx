import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm"; // import your booking form

const ProviderCard = ({ provider, service }) => {
  const navigate = useNavigate();
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="min-w-[250px] bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition duration-300 text-center">
      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{provider.location}</p>
      <p className="text-gray-700 mt-1 font-medium">{provider.completed} services done</p>
      
      <div className="mt-2 text-gray-600 text-sm">{provider.services?.join(", ")}</div> {/* List of services */}

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate(`/provider/${provider.id}`, { state: { provider } })}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Profile
        </button>
        <button
          onClick={() => setShowBookingForm(true)} // Open booking form modal
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Book Now
        </button>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
  provider={provider}
  service={service}  // Pass the current service
  onClose={() => setShowBookingForm(false)}
/>

      )}
    </div>
  );
};

export default ProviderCard;
