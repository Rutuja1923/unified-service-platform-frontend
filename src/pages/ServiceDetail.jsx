import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import BookingModal from "../components/BookingModal";
import { AuthContext } from "../contexts/AuthContext";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get(`/services/${id}`);
        setService(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetch();
  }, [id]);

  if (!service) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold">{service.title}</h2>
      <p className="text-sm text-gray-600">
        {service.category} • {service.location}
      </p>
      <p className="mt-4">{service.description}</p>
      <div className="mt-6 flex justify-between items-center">
        <div className="text-2xl font-bold">₹{service.price}</div>
        <div>
          {!user ? (
            <div className="text-sm">Log in to book</div>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
      {open && (
        <BookingModal
          service={service}
          onClose={() => setOpen(false)}
          onBooked={() => {
            setOpen(false);
            alert("Booked!");
          }}
        />
      )}
    </div>
  );
}
