import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Projects from "./pages/Projects";
import Mentors from "./pages/Mentors";
import Collab from "./pages/Collab";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";

import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Toaster position="top-center" reverseOrder={false} />

      {!hideHeaderFooter && <Navbar />}

      {/* Apply padding only when header is visible */}
      <div className={`flex-grow ${!hideHeaderFooter ? "pt-16" : ""}`}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes */}
          <Route
            path="/discover"
            element={
              <PrivateRoute>
                <Discover />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route
            path="/mentors"
            element={
              <PrivateRoute>
                <Mentors />
              </PrivateRoute>
            }
          />
          <Route
            path="/collab"
            element={
              <PrivateRoute>
                <Collab />
              </PrivateRoute>
            }
          />
          <Route
            path="/FAQs"
            element={
              <PrivateRoute>
                <FAQs />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/aboutus"
            element={
              <PrivateRoute>
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <PrivateRoute>
                <Privacy />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
