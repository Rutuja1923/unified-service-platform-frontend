import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Hello, {user?.email}</h2>
      <p className="mb-2">This is your dashboard.</p>
      <p>Show past bookings, favorite services, or provider analytics here.</p>
    </div>
  );
}
