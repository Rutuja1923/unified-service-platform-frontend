import React from "react";
import { useNavigate } from "react-router-dom";

function DomainCard({ domain }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a page that shows all services under this domain
    navigate("/domain-services", { state: { domain } });
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: "220px",
        background: "white",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        cursor: "pointer"
      }}
    >
      <img
        src={domain.img}
        alt={domain.category}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />
      <h4>{domain.category}</h4>
      <p>{domain.description}</p>
    </div>
  );
}

export default DomainCard;
