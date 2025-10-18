import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { serviceListing } from "./serviceListing";

export default function Home() {
  const [search, setSearch] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const filteredCategories = serviceListing.filter((cat) =>
    [cat.name, cat.location, cat.category]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      {/* 🌊 Animated Banner */}
      <motion.section
        className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Dynamic Gradient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        />
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Text & Search */}
        <div className="relative z-10 text-white px-6 py-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            💎 Premium Services at Your Doorstep
          </motion.h1>
          <p className="text-lg mb-6 text-blue-100 max-w-xl mx-auto">
            Book trusted professionals for all your needs — fast, safe, and
            reliable ⚡
          </p>

          {/* Search Bar */}
          <motion.input
            type="text"
            placeholder="Search for services, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white w-full md:w-[420px] px-6 py-3 rounded-full shadow-md text-gray-800 focus:ring-4 focus:ring-blue-300 outline-none transition-all"
            whileFocus={{ scale: 1.05 }}
          />
        </div>
      </motion.section>

      {/* ⚡ Service Categories */}
      <section className="flex-grow py-16 px-6 md:px-10 bg-gradient-to-br from-blue-100 via-blue-50 to-cyan-50">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat, index) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-blue-700 flex items-center justify-center gap-2">
                    {cat.name}
                    {cat.verified && (
                      <FaCheckCircle className="text-green-500" />
                    )}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{cat.desc}</p>
                  <p className="text-blue-700 font-semibold mt-1">
                    {cat.servicesAvailable}+ services available
                  </p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full mt-4"
                    onClick={() => navigate(`/services/${cat.key}`)}
                  >
                    Explore Services
                  </Button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full text-lg">
              No services found for “{search}”
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
