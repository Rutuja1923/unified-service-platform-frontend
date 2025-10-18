import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

// ✅ Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BookingForm from "./components/BookingForm";

// 🧩 Future/Optional pages (uncomment when ready)
import Services from "./pages/Services";
import ServiceExplorer from "./pages/ServiceExplorer";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import ProviderProfile from "./pages/ProviderProfile";
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard";
import ServiceForm from "./components/ServiceForm";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col min-h-screen">
      {/* 🧭 Common Navbar */}
      <Navbar />

      {/* 🧱 Page Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              user?.role === "provider" ? (
                <ServiceProviderDashboard />
              ) : (
                <Dashboard />
              )
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* 🧩 Future routes (keep commented until ready) */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/services/explorer" element={<ServiceExplorer />} />
          <Route path="/services/:category" element={<ServiceCategory />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/add-service" element={<ServiceForm />} />
          <Route path="/book/:id" element={<BookingForm />} />
        </Routes>
      </main>

      {/* 📩 Common Footer */}
      <Footer />
    </div>
  );
}

export default App;
