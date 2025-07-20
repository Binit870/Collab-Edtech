// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // `user` should be null/false if not logged in

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
