import React from "react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold text-white">WorkLink</h2>
        <p className="text-sm mt-2">
          Connecting you with trusted service providers nearby.
        </p>

        <Separator className="my-4 bg-gray-700" />

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} WorkLink. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
