import React from "react";

function ServiceCard({ service }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      textAlign: "center",
      padding: "15px",
      transition: "transform 0.3s"
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <div style={{ fontSize: "50px", padding: "10px 0" }}>{service.icon}</div>
      <h3>{service.name}</h3>
      <p style={{ color: "#555" }}>{service.description}</p>
      <p style={{ fontWeight: "bold", color: "#007bff" }}>₹{service.price}</p>
      <p style={{ fontSize: "0.9rem", color: "#333" }}>Provider: {service.provider}</p>
      <p style={{ fontSize: "0.9rem", color: "#333" }}>Rating: {service.rating} ⭐</p>
    </div>
  );
}

export default ServiceCard;
