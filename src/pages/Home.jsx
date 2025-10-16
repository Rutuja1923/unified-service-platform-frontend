import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Welcome to ServeLink!</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg">Sign Up</Link>
        <Link to="/services" className="px-4 py-2 bg-purple-600 text-white rounded-lg">Services</Link>
      </div>
    </div>
  );
}
