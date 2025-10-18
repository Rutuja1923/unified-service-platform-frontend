// pages/BookServices.js
import React, { useState } from "react";

function BookServices() {
  const [services] = useState([
    { id: 1, name: "Plumbing", price: 500, availability: "9am-5pm" },
    { id: 2, name: "Cleaning", price: 300, availability: "10am-4pm" },
  ]);

  const handleBook = (service) => {
    alert(`Booked ${service.name} for ₹${service.price}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Services</h2>
      {services.map(s => (
        <div key={s.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{s.name}</h4>
          <p>Price: ₹{s.price}</p>
          <p>Availability: {s.availability}</p>
          <button onClick={() => handleBook(s)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default BookServices;
