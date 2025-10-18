import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingForm({ provider, service, onClose }) {
  const [formData, setFormData] = useState({
    scheduledTime: "",
    paymentMethod: "cash",
    totalAmount: service?.defaultCost || "",
    address: "",
    lat: "",
    lng: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (provider) {
      setFormData((prev) => ({
        ...prev,
        totalAmount: provider.cost.split(" - ")[0],
      }));
    }
  }, [provider]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("/api/bookings", {
        providerId: provider?.id,
        serviceId: service?.id,
        scheduledTime: formData.scheduledTime,
        paymentMethod: formData.paymentMethod,
        totalAmount: formData.totalAmount,
        location: {
          address: formData.address,
          coordinates: {
            lat: parseFloat(formData.lat),
            lng: parseFloat(formData.lng),
          },
        },
      });

      setSuccess("Booking successful!");
      setFormData({
        scheduledTime: "",
        paymentMethod: "cash",
        totalAmount: provider?.cost.split(" - ")[0] || "",
        address: "",
        lat: "",
        lng: "",
      });

      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Book {provider?.name || "Service"}'s Service
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="scheduledTime">Scheduled Time</Label>
            <Input
              id="scheduledTime"
              type="datetime-local"
              name="scheduledTime"
              value={formData.scheduledTime}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select
              value={formData.paymentMethod}
              onValueChange={(value) =>
                setFormData({ ...formData, paymentMethod: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="wallet">Wallet</SelectItem>
                <SelectItem value="online">Online</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="totalAmount">Total Amount</Label>
            <Input
              id="totalAmount"
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleChange}
              required
              placeholder="₹"
            />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="lat">Latitude</Label>
              <Input
                id="lat"
                type="number"
                name="lat"
                value={formData.lat}
                onChange={handleChange}
                required
                placeholder="Latitude"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="lng">Longitude</Label>
              <Input
                id="lng"
                type="number"
                name="lng"
                value={formData.lng}
                onChange={handleChange}
                required
                placeholder="Longitude"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </div>
    </div>
  );
}
