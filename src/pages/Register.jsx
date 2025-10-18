import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Register() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      line1: "",
      city: "",
      state: "",
      pincode: "",
    },
    role: "user",
  });

  const [loading, setLoading] = useState(false);

  // handle input for normal fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle address fields
  const handleAddressChange = (e) => {
    setForm({
      ...form,
      address: { ...form.address, [e.target.name]: e.target.value },
    });
  };

  const handleUserTypeChange = (value) => setForm({ ...form, role: value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, address } = form;
    if (!address.line1 || !address.city || !address.state || !address.pincode) {
      alert("Please fill out all address fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user);
        navigate("/dashboard");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <Card className="w-full max-w-md p-6 shadow-lg border border-gray-100 rounded-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-semibold text-gray-800">
            Create an Account ✨
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">Register to get started</p>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 mt-4">
            <div>
              <Label className="text-gray-600 text-sm">Full Name</Label>
              <Input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-600 text-sm">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-600 text-sm">Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            {/* Address Fields */}
            <div>
              <Label className="text-gray-600 text-sm">Address Line</Label>
              <Input
                name="line1"
                placeholder="Street / Area"
                value={form.address.line1}
                onChange={handleAddressChange}
                required
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-600 text-sm">City</Label>
                <Input
                  name="city"
                  placeholder="City"
                  value={form.address.city}
                  onChange={handleAddressChange}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-gray-600 text-sm">State</Label>
                <Input
                  name="state"
                  placeholder="State"
                  value={form.address.state}
                  onChange={handleAddressChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label className="text-gray-600 text-sm">Pincode</Label>
              <Input
                name="pincode"
                placeholder="Pincode"
                value={form.address.pincode}
                onChange={handleAddressChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-gray-600 text-sm">User Type</Label>
              <Select value={form.role} onValueChange={handleUserTypeChange}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="provider">Provider</SelectItem>
                  <SelectItem value="organization">Organization</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-md py-2 transition-all duration-200"
            >
              {loading ? "Registering..." : "Register"}
            </Button>
            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
