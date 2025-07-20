import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useAuth();

  console.log("Logged in user:", user);

  const navigate = useNavigate();
  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 shadow-md px-6 py-4"
      style={{
        background: "linear-gradient(to right, #f8b500, #fceabb)",
        color: "white",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
        >
          <PiUsersThree className="text-blue-500 w-9 h-9" />
          <span>CollabEdTech</span>
        </Link>

        {/* Desktop Links */}
        <div className="flex items-center space-x-8 ml-auto">
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
            >
              Home
            </Link>
            <Link
              to="/discover"
              className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
            >
              Discover
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
            >
              Projects
            </Link>
            <Link
              to="/mentors"
              className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
            >
              Mentors
            </Link>
            <Link
              to="/collab"
              className="text-gray-700 hover:text-blue-500 font-semibold text-[1.05rem]"
            >
              Collab
            </Link>
          </div>

          {/* Auth/Profile */}
          <div className="hidden md:flex items-center space-x-4 relative">
            {!user ? (
              <>
                <Link to="/register">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                    Log In
                  </button>
                </Link>
              </>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="focus:outline-none"
                >
                  <FaUserCircle className="text-gray-700 w-8 h-8" />
                </button>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <div className="px-4 py-2 text-gray-800 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.role}</p>
                      <p className="text-sm mt-1">
                        Skills:{" "}
                        {user.skills && user.skills.length > 0
                          ? user.skills.join(", ")
                          : "No skills listed"}
                      </p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 px-4 pb-4">
          <Link
            to="/discover"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500"
          >
            Discover
          </Link>
          
          <Link
            to="/collab"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-500"
          >
            Collab
          </Link>

          {!user ? (
            <>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
                  Register
                </button>
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-gray-200 text-gray-700 w-full py-2 rounded hover:bg-gray-300">
                  Log In
                </button>
              </Link>
            </>
          ) : (
            <>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50">
                  <div className="px-4 py-2 text-gray-800 border-b">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.role}</p>
                    <p className="text-sm mt-1">
                      Skills:{" "}
                      {user.skills && user.skills.length > 0
                        ? user.skills.join(", ")
                        : "No skills listed"}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}

              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
