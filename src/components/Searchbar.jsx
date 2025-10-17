import React from "react";

export default function SearchBar({ placeholder, onChange }) {
  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full md:w-96 px-4 py-2 border border-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
      />
    </div>
  );
}
