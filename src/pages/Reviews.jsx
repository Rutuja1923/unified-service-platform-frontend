import React from "react";

const mockReviews = [
  { id: 1, user: "John Doe", rating: 5, comment: "Excellent service!" },
  { id: 2, user: "Jane Smith", rating: 4, comment: "Very reliable." },
  { id: 3, user: "Ajay Kumar", rating: 5, comment: "Highly recommend!" },
];

export default function Reviews() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Customer Reviews</h2>
      <div className="space-y-4">
        {mockReviews.map((r) => (
          <div key={r.id} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{r.user}</span>
              <span className="text-yellow-500">{'⭐'.repeat(r.rating)}</span>
            </div>
            <p className="text-gray-700">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
