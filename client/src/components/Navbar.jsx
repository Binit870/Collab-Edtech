import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { useAuth } from "../context/AuthContext";

// (The ProfileMenu component remains the same as before)
const ProfileMenu = ({ user, onLogout }) => (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 ring-1 ring-black ring-opacity-5">
        <div className="px-4 py-3 border-b">
            <p className="font-semibold text-gray-800 truncate">{user.name}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
        </div>
        <div className="py-1">
            <button
                onClick={onLogout}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            >
                Logout
            </button>
        </div>
    </div>
);


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Discover" },
    { href: "/projects", label: "Projects" },
    { href: "/mentors", label: "Mentors" },
    { href: "/collab", label: "Collab" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md px-6 py-4" // Overall padding is here
      style={{
        background: "linear-gradient(to right, #f8b500, #fceabb)",
        color: "white",
      }}
    >
      {/* CHANGE: This div is now full-width to push content to the edges */}
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
        >
          <PiUsersThree className="text-blue-500 w-9 h-9" />
          <span>CollabEdTech</span>
        </Link>

        {/* CHANGE: Wrapper for all right-side desktop content */}
        <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Links */}
            <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    to={link.href}
                    className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
                    >
                    {link.label}
                    </Link>
                ))}
            </div>

            {/* Desktop Auth/Profile */}
            <div className="flex items-center">
                {!user ? (
                    <div className="flex items-center space-x-4">
                        <Link to="/register">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Register
                            </button>
                        </Link>
                        <Link to="/login">
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                            Log In
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="relative" ref={profileRef}>
                    <button
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        className="focus:outline-none"
                    >
                        <FaUserCircle className="text-gray-700 w-8 h-8" />
                    </button>
                    {isProfileMenuOpen && (
                        <ProfileMenu user={user} onLogout={handleLogout} />
                    )}
                    </div>
                )}
            </div>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700" // This hides the button on medium screens and up
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content (No changes needed here) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 px-4 pb-4 bg-white rounded-md shadow-lg">
          {navLinks.map((link) => (
             <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500 py-2"
              >
              {link.label}
            </Link>
          ))}
          
          <div className="border-t border-gray-200 pt-4 mt-2 space-y-2">
            {!user ? (
              <>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
                    Register
                  </button>
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="bg-gray-200 text-gray-700 w-full py-2 rounded hover:bg-gray-300">
                    Log In
                  </button>
                </Link>
              </>
            ) : (
              <div className="space-y-2">
                 <div className="px-2 py-2">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                 </div>
                 <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                  >
                   Logout
                 </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;