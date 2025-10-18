import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // For now, mock booking data (you can replace with API later)
  const bookings = [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 👋 Welcome Message */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Welcome back, {user?.name || user?.email || "Guest"}! 👋
          </h2>
          <p className="text-gray-600">
            Here’s a quick overview of your activity and services.
          </p>
        </div>

        {/* 🧾 Conditional Bookings Section */}
        {bookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-16 px-6 border border-dashed border-blue-200 rounded-xl bg-blue-50/30">
            <FaRegSmileBeam className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              No bookings yet!
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              It looks like you haven’t booked any services yet. Explore trusted
              professionals and get things done in no time!
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium"
            >
              Browse Services
            </Button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Your Recent Bookings
            </h3>
            {/* Render booking cards here */}
          </div>
        )}
      </motion.div>
    </div>
  );
}
