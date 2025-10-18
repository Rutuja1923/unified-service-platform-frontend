import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

// Example services / jobs data
const services = [
  { id: 1, name: "Plumbing Fix", location: "Bangalore", assignedTo: "provider1" },
  { id: 2, name: "Electrician Service", location: "Delhi", assignedTo: "provider2" },
  { id: 3, name: "Painting Work", location: "Bangalore", assignedTo: "provider1" },
  { id: 4, name: "Home Cleaning", location: "Mumbai", assignedTo: "provider3" },
];

function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Please login to access your dashboard.</h2>
        <Link to="/login">
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#1976d2", marginBottom: "20px" }}>
        Welcome, {user.email} ({user.userType})
      </h2>

      {/* User dashboard */}
      {user.userType === "user" && (
        <>
          <h3>Services available in your area ({user.location}):</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {services
              .filter((s) => s.location.toLowerCase() === user.location.toLowerCase())
              .map((s) => (
                <li
                  key={s.id}
                  style={{
                    padding: "12px 15px",
                    marginBottom: "10px",
                    backgroundColor: "#f1f1f1",
                    borderRadius: "8px",
                  }}
                >
                  {s.name} - {s.location}
                </li>
              ))}
          </ul>
        </>
      )}

      {/* Provider dashboard */}
      {user.userType === "provider" && (
        <>
          <h3>Your assigned jobs:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {services
              .filter((s) => s.assignedTo === user.email)
              .map((s) => (
                <li
                  key={s.id}
                  style={{
                    padding: "12px 15px",
                    marginBottom: "10px",
                    backgroundColor: "#e8f0fe",
                    borderRadius: "8px",
                  }}
                >
                  {s.name} - {s.location}
                </li>
              ))}
          </ul>
        </>
      )}

      {/* Organization dashboard */}
      {user.userType === "organization" && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#fff3e0",
            borderRadius: "10px",
          }}
        >
          <h3>Organization Overview</h3>
          <p>Total services listed: {services.length}</p>
          <p>Locations covered: {Array.from(new Set(services.map((s) => s.location))).join(", ")}</p>
        </div>
      )}

      {/* Admin dashboard */}
      {user.userType === "admin" && (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffebee",
            borderRadius: "10px",
          }}
        >
          <h3>Admin Panel</h3>
          <p>Manage users, providers, organizations, and services here.</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
