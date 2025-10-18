import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Banner() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for "${search}" near "${location}"`);
    // Later: integrate with your real search API
  };

  return (
    <div className="relative h-[420px] flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 overflow-hidden">
      {/* Background blur overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

      {/* Foreground content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-5xl font-bold drop-shadow-lg mb-3">WorkLink</h1>
        <p className="text-lg text-blue-50 mb-8">
          Find trusted service providers within 3–5 km of your location
        </p>

        {/* Search Form */}
        <Card className="bg-white/30 backdrop-blur-lg border border-white/30 shadow-xl p-4 rounded-2xl">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <Input
              type="text"
              placeholder="What service do you need?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-white placeholder:text-gray-600 focus:bg-white transition"
              required
            />
            <Input
              type="text"
              placeholder="Your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 bg-white placeholder:text-gray-600 focus:bg-white transition"
              required
            />
            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full sm:w-auto transition"
            >
              Search
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
