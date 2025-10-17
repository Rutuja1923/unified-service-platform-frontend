import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";
import ServiceForm from "./components/ServiceForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-service" element={<ServiceForm />} />
      </Routes>
    </Router>
  );
}

export default App;
