import React from "react";

export default function Toast({ message, show }) {
  if (!show) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}
