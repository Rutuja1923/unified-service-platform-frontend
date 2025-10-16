import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../api/api";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", formData);
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg"/>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg"/>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Login</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
