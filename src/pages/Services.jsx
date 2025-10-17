import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/Searchbar";
import axios from "axios";

// Your initial array of services
const initialServices = [
  {
    _id: "1",
    name: "Home Cleaning",
    description: "Deep cleaning for every corner of your home.",
    provider: "CleanCo",
    price: "₹999",
    category: "Household",
    image: "https://img.freepik.com/free-photo/cleaning-service-concept_23-2149154082.jpg",
  },
  {
    _id: "2",
    name: "Electrician",
    description: "Expert wiring, lighting, and electrical repairs.",
    provider: "PowerFix",
    price: "₹799",
    category: "Household",
    image: "https://img.freepik.com/free-photo/technician-repairing-air-conditioner_23-2149392870.jpg",
  },
  {
    _id: "3",
    name: "Plumber",
    description: "Leak detection and pipe repair services.",
    provider: "PipeCare",
    price: "₹699",
    category: "Household",
    image: "https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149371691.jpg",
  },
  {
    _id: "4",
    name: "Carpenter",
    description: "Furniture repair and custom woodwork.",
    provider: "WoodWorks",
    price: "₹899",
    category: "Household",
    image: "https://img.freepik.com/free-photo/carpenter-working-wood_23-2148774413.jpg",
  },
  {
    _id: "5",
    name: "Beauty Salon at Home",
    description: "Haircuts, facials, waxing — all at your doorstep.",
    provider: "GlamHub",
    price: "₹499",
    category: "Women’s",
    image: "https://img.freepik.com/free-photo/woman-getting-facial-treatment_23-2148708701.jpg",
  },
  {
    _id: "6",
    name: "Makeup Artist",
    description: "Professional makeup for weddings and events.",
    provider: "StyleNGlow",
    price: "₹1499",
    category: "Women’s",
    image: "https://img.freepik.com/free-photo/makeup-artist-doing-makeup-woman_23-2149243905.jpg",
  },
  {
    _id: "7",
    name: "Mehendi Artist",
    description: "Traditional and trendy mehendi designs.",
    provider: "HennaHearts",
    price: "₹799",
    category: "Women’s",
    image: "https://img.freepik.com/free-photo/close-up-indian-bride-henna_23-2149309570.jpg",
  },
];

export default function Services() {
  const [services, setServices] = useState(initialServices);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch services from backend on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        if (res.data.length > 0) {
          // Append backend services after initialServices
          setServices([...initialServices, ...res.data]);
        }
      })
      .catch(() => console.log("Backend fetch failed — showing local data."));
  }, []);

  const handleCardClick = (service) => {
    navigate(`/service/${service._id}`, { state: { service } });
  };

  const filteredServices = services.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(filteredServices.map((s) => s.category))];

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Available Services
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <SearchBar
          placeholder="Search for a service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {categories.map((cat) => {
        const filtered = filteredServices.filter((s) => s.category === cat);
        if (filtered.length === 0) return null;

        return (
          <div key={cat} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 inline-block">
              {cat} Services
            </h2>

            <div className="scroll-container flex space-x-4 overflow-x-auto pb-4">
              {filtered.map((service) => (
                <div
                  key={service._id + Math.random()} // avoid duplicate _id clash
                  onClick={() => handleCardClick(service)}
                  className="cursor-pointer min-w-[280px] snap-center"
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
