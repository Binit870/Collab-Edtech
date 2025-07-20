// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user state with value from localStorage or null if not found
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:9000/api/auth/login", {
        email,
        password,
      });

      if (res.data && res.data.token) {
        // Store user and token in localStorage
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token); // Optional: save token for auth
        return true;
      } else {
        toast.error(res.data.message || "Login failed");
        return false;
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong during login.");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem("user"); // Remove user data from localStorage
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  // Register function
  const register = async (name, email, password, role, skills) => {
    try {
      const res = await axios.post("http://localhost:9000/api/auth/register", {
        name,
        email,
        password,
        role,
        skills,
      });

      if (res.status === 201) {
        
        return true;
      } else {
        toast.error(res?.data?.message || "Registration failed");
        return false;
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(err?.response?.data?.message || "Something went wrong during registration.");
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication data and functions
export const useAuth = () => useContext(AuthContext);
