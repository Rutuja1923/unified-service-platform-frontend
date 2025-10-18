import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const allServices = {
  "home-improvement": [
    {
      id: 1,
      name: "Plumbing",
      desc: "Installation, repair, and maintenance of water systems.",
      icon: "🔧",
    },
    {
      id: 2,
      name: "Electrician",
      desc: "Installation, repair, and maintenance of electrical systems.",
      icon: "⚡",
    }, // <-- added icon
    {
      id: 3,
      name: "HVAC Services",
      desc: "Heating, ventilation, and air conditioning.",
      icon: "❄",
    },
    {
      id: 4,
      name: "Cleaning Services",
      desc: "Regular, deep, or specialized cleaning.",
      icon: "🧹",
    },
    {
      id: 5,
      name: "Painting & Carpentry",
      desc: "Interior/exterior painting and woodwork.",
      icon: "🎨",
    },
    {
      id: 5,
      name: "Security & Surveillance",
      desc: "Installation and maintenance of CCTV cameras, alarm systems, and home security solutions.",
      icon: "🔒",
    },
    {
      id: 6,
      name: "Gardening",
      desc: "Planting, lawn maintenance, pruning, and basic garden care.",
      icon: "🌱",
    },
    {
      id: 7,
      name: "Laundry & Ironing",
      desc: "Washing, drying, and ironing clothes.",
      icon: "🧺",
    },
  ],

  "home-health-care": [
    {
      id: 10,
      name: "Skilled Nursing",
      desc: "Medical care by a licensed nurse.",
      price: "₹1000",
      icon: "🏥",
    },
    {
      id: 11,
      name: "Personal Care",
      desc: "Assistance with bathing, dressing, and grooming.",
      price: "₹800",
      icon: "🛁",
    },
  ],
  "business-services": [
    {
      id: 20,
      name: "IT Services",
      desc: "Software, hardware, network, cybersecurity support.",
      price: "₹1800",
      icon: "💻",
    },
    {
      id: 21,
      name: "Accounting & Finance",
      desc: "Banking, tax, bookkeeping, payroll.",
      price: "₹1500",
      icon: "📊",
    },
  ],
  "personal-services": [
    {
      id: 30,
      name: "Beauty & Lifestyle",
      desc: "Hair, makeup, nails, personal shopping.",
      price: "₹700",
      icon: "💇‍♀",
    },
    {
      id: 31,
      name: "Health & Wellness",
      desc: "Fitness training, yoga, nutrition.",
      price: "₹800",
      icon: "🧘‍♀",
    },
  ],
};

function ServiceCategory() {
  const { category } = useParams();
  const services = allServices[category] || [];
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9)",
        padding: "50px 0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#0d1b2a",
        }}
      >
        <h2
          style={{ fontSize: "2rem", fontWeight: "700", letterSpacing: "1px" }}
        >
          {category.replace("-", " ").toUpperCase()}
        </h2>
        <p style={{ color: "#1b263b", fontSize: "1.1rem" }}>
          Explore our best services in this category 🚀
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          padding: "0 5%",
        }}
      >
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => navigate(`/service/${s.id}`)}
            style={{
              background: "#fff",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
              padding: "25px 20px",
              transition: "all 0.3s ease",
              cursor: "pointer",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ fontSize: "45px", marginBottom: "15px" }}>
              {s.icon}
            </div>
            <h3 style={{ color: "#1976d2", fontWeight: "600" }}>{s.name}</h3>
            <p
              style={{ color: "#555", fontSize: "0.95rem", marginTop: "10px" }}
            >
              {s.desc}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#0d47a1",
                marginTop: "15px",
              }}
            >
              {s.price}
            </p>
            <button
              style={{
                marginTop: "15px",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Available Service Providers
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCategory;
