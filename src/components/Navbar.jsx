import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-500 transition";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          UnifiedServices
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          {user && (
            <Link to="/dashboard" className={isActive("/")}>
              Dashboard
            </Link>
          )}
          <Link to="/about" className={isActive("/")}>
            About Us
          </Link>
          <Link to="/contact" className={isActive("/")}>
            Contact Us
          </Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Button
                variant="outline"
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar>
                {/* <AvatarFallback>
                  {user?.name.charAt(0).toUpperCase()}
                </AvatarFallback> */}
              </Avatar>
              <span className="text-gray-800 font-medium">{user.name}</span>
              <Separator orientation="vertical" className="h-6 bg-gray-300" />
              <Button
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
