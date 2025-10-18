import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  // Master list of services grouped by category
  const categorizedServices = [
    {
      title: "🏠 Home Services",
      description: "Essential services to keep your home running smoothly.",
      services: [
        {
          _id: 1,
          name: "Plumbing",
          category: "Home Services",
          description:
            "Fix leaks, install taps, and manage all water-related repairs.",
          price: "₹500",
          provider: "Ramesh Kumar",
          image:
            "https://images.unsplash.com/photo-1581579186989-1211c8d174b6?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 2,
          name: "Home Cleaning",
          category: "Home Services",
          description: "Professional cleaning for your entire home.",
          price: "₹350",
          provider: "Sunita Sharma",
          image:
            "https://images.unsplash.com/photo-1581579186989-1211c8d174b6?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 3,
          name: "Electrician",
          category: "Home Services",
          description: "Wiring, fan installation, and power fixes.",
          price: "₹400",
          provider: "Vikas Singh",
          image:
            "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "💇 Women’s Section",
      description: "Personal care and beauty services for women.",
      services: [
        {
          _id: 4,
          name: "Salon at Home",
          category: "Women’s Section",
          description:
            "Beauty, grooming, and relaxation services at your doorstep.",
          price: "₹800",
          provider: "Anita Verma",
          image:
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 5,
          name: "Makeup Artist",
          category: "Women’s Section",
          description: "Get ready for parties, weddings, and events.",
          price: "₹1200",
          provider: "Meena Kapoor",
          image:
            "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 6,
          name: "Yoga & Fitness",
          category: "Women’s Section",
          description: "Online and in-person yoga sessions for all levels.",
          price: "₹600",
          provider: "Priya Mehta",
          image:
            "https://images.unsplash.com/photo-1594737625785-cabc83d9db87?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "👨 Adults Section",
      description: "Skill-based and lifestyle services for adults.",
      services: [
        {
          _id: 7,
          name: "Driving Classes",
          category: "Adults Section",
          description: "Learn to drive safely with certified instructors.",
          price: "₹2000",
          provider: "Ravi Patel",
          image:
            "https://images.unsplash.com/photo-1597452485663-3b8b73f89f09?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 8,
          name: "Cooking Classes",
          category: "Adults Section",
          description: "Master new recipes and cuisines at home.",
          price: "₹1000",
          provider: "Seema Joshi",
          image:
            "https://images.unsplash.com/photo-1528715471579-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 9,
          name: "Personal Finance Training",
          category: "Adults Section",
          description: "Learn budgeting, investing, and saving.",
          price: "₹500",
          provider: "Ankit Sharma",
          image:
            "https://images.unsplash.com/photo-1605792657660-c9fdbfed0a1f?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "⚕️ Health & Wellness",
      description: "Stay fit and healthy with top-rated wellness services.",
      services: [
        {
          _id: 10,
          name: "Doctor Consultation",
          category: "Health & Wellness",
          description:
            "Book online or home consultation with certified doctors.",
          price: "₹700",
          provider: "Dr. Arjun Kumar",
          image:
            "https://images.unsplash.com/photo-1588776814546-5b3a7d63d07b?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 11,
          name: "Physiotherapy",
          category: "Health & Wellness",
          description: "In-home physiotherapy for injury recovery.",
          price: "₹900",
          provider: "Dr. Neha Gupta",
          image:
            "https://images.unsplash.com/photo-1588774069273-0c17cb0a6b4b?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 12,
          name: "Nutritionist Consultation",
          category: "Health & Wellness",
          description: "Personalized diet plans and fitness guidance.",
          price: "₹600",
          provider: "Ritu Raj",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
    {
      title: "💻 Others",
      description: "Miscellaneous and on-demand digital services.",
      services: [
        {
          _id: 13,
          name: "Website Design",
          category: "Others",
          description: "Custom websites for small businesses and startups.",
          price: "₹5000",
          provider: "TechStudio Pvt Ltd",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 14,
          name: "Photography",
          category: "Others",
          description: "Event, portrait, and product photography.",
          price: "₹1500",
          provider: "Rahul Photography",
          image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
        },
        {
          _id: 15,
          name: "Freelance Tutoring",
          category: "Others",
          description: "Online classes for school and college subjects.",
          price: "₹800",
          provider: "Komal Joshi",
          image:
            "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=60",
        },
      ],
    },
  ];

  // Filter logic for search
  const filteredCategories = categorizedServices.map((category) => ({
    ...category,
    services: category.services.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="🔍 Search for a service..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Services Sections */}
      <div className="px-6 md:px-12 py-10 space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-6">{category.description}</p>

            {category.services.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No matching services found.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
