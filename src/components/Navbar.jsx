import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold cursor-pointer hover:text-blue-200"
      >
        ServeLink
      </h1>

      <div className="flex space-x-6 text-lg items-center">
        <Link to="/services" className="hover:text-blue-300">
          Services
        </Link>
        <button
          onClick={() => navigate("/add-service")}
          className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded-md transition"
        >
          Add Service
        </button>
        <Link to="/login" className="hover:text-blue-300">
          Login
        </Link>
        <Link to="/signup" className="hover:text-blue-300">
          Signup
        </Link>
      </div>
    </nav>
  );
}
