import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white px-4">
      <motion.div
        className="absolute -top-24 -left-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 40, -30, 0], y: [0, 25, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[26rem] h-[26rem] bg-violet-500/25 rounded-full blur-3xl"
        animate={{ x: [0, -25, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to ServeLink
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Your one-stop platform to connect service providers, job seekers, and customers.  
          Empowering communities through reliable connections and seamless service experiences.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Login */}
          <div className="relative group flex flex-col items-center">
            <Link
              to="/login"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 rounded-lg text-white font-semibold shadow-lg transition-all duration-300"
            >
              Login
            </Link>
            <span className="mt-2 text-xs bg-gray-900/90 text-teal-300 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
              Already a member? Login →
            </span>
          </div>

          {/* Explore Services */}
          <Link
            to="/services"
            className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 rounded-lg text-white font-semibold shadow-lg transition-all duration-300"
          >
            Explore Services
          </Link>

          {/* Sign Up */}
          <div className="relative group flex flex-col items-center">
            <Link
              to="/signup"
              className="px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-400 hover:to-violet-500 rounded-lg text-white font-semibold shadow-lg transition-all duration-300"
            >
              Sign Up
            </Link>
            <span className="mt-2 text-xs bg-gray-900/90 text-violet-300 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
              New here? Join us →
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
