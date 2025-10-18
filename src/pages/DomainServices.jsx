import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function DomainServices() {
  const location = useLocation();
  const navigate = useNavigate();
  const { domain } = location.state || {};

  if (!domain) return (
    <div style={{ padding: "20px" }}>
      <h2>No domain selected</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>{domain.category}</h2>
      <p>{domain.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {domain.services.map((service, idx) => (
          <ServiceCard key={idx} service={service} />
        ))}
      </div>
      <button style={{ marginTop: "20px" }} onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default DomainServices;
