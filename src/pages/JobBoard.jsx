import React, { useEffect, useState } from "react";
import api from "../api/api";

const fallbackJobs = [
  {
    _id: 1,
    title: "Delivery Boy",
    company: "XYZ Pvt Ltd",
    location: "Delhi",
    description: "Deliver parcels",
    salary: "₹15k/month",
  },
  {
    _id: 2,
    title: "House Cleaner",
    company: "ABC Services",
    location: "Mumbai",
    description: "Clean homes",
    salary: "₹12k/month",
  },
];

export default function JobBoard() {
  const [jobs, setJobs] = useState(fallbackJobs);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.warn("Backend not reachable, using fallback data", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 text-blue-900 font-bold">Job Board</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((j) => (
          <div key={j._id} className="bg-blue-100 p-4 rounded shadow">
            <div className="font-semibold text-blue-800">{j.title}</div>
            <div className="text-sm text-blue-700">{j.description}</div>
            <div className="text-sm mt-2 text-blue-600">
              Location: {j.location} • Salary: {j.salary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
