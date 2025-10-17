import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <button 
          type="submit" 
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg text-white font-semibold transition-all duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-gray-400 text-sm text-center">
          Don't have an account? <a href="/signup" className="text-teal-400 hover:underline">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
