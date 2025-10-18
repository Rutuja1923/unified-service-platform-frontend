import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { serviceData } from "./data";

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Replace this with your current service id logic
  const serviceId = 1;
  const service = serviceData[serviceId];

  if (!service) return <p>Service not found.</p>;

  const handleAction = (actionPath) => {
    if (!user) {
      // If user is not logged in, prompt them to login or register
      const confirmLogin = window.confirm(
        "You need to login or register to continue. Do you want to login now?"
      );
      if (confirmLogin) navigate("/login");
      return;
    }
    // If logged in, navigate to the appropriate page
    navigate(actionPath);
  };

  return (
    <div
      style={{
        background: "#f4f6f9",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <div style={{ padding: "20px 40px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            color: "#1976d2",
            border: "none",
            background: "none",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          ← Back
        </button>
      </div>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1
          style={{ color: "#1976d2", marginBottom: "10px", fontSize: "2rem" }}
        >
          {`${service.name} Service Providers`}
        </h1>
        {/* <p
          style={{
            color: "#555",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {service.desc}
        </p> */}
      </div>

      <div style={{ padding: "0 40px" }}>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "30px",
            paddingBottom: "30px",
            scrollSnapType: "x mandatory",
          }}
        >
          {service.providers.map((p) => (
            <div
              key={p.id}
              style={{
                flex: "0 0 350px",
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                padding: "25px",
                scrollSnapAlign: "center",
                textAlign: "center",
              }}
            >
              <h3>
                {p.name}{" "}
                {p.verified && <span style={{ color: "green" }}>✔</span>}
              </h3>
              <p style={{ color: "#777", fontSize: "0.95rem" }}>{p.location}</p>

              {p.services && p.services.length > 0 && (
                <p
                  style={{
                    color: "#444",
                    fontSize: "0.95rem",
                    margin: "5px 0 15px",
                  }}
                >
                  Services: {p.services.join(", ")}
                </p>
              )}

              <p
                style={{
                  fontWeight: "bold",
                  color: "#1976d2",
                  marginTop: "5px",
                }}
              >
                {p.cost}
              </p>
              <p style={{ color: "#444", marginBottom: "15px" }}>
                ⭐ {p.rating} | {p.completed} jobs completed
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => handleAction(`/provider/${p.id}`)}
                  style={{
                    background: "#ffa500",
                    color: "white",
                    border: "none",
                    padding: "10px 25px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Explore Profile
                </button>
                <button
                  onClick={() => handleAction(`/book/${p.id}`)} // Or open your booking modal
                  style={{
                    background: "#1976d2",
                    color: "white",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
