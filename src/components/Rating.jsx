import React from "react";

export default function Rating({ value }) {
  const stars = Array(5).fill(0).map((_, i) => i < value ? "★" : "☆");
  return <div className="text-yellow-400 text-lg">{stars.join("")}</div>;
}
