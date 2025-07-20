import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaUser, FaUserTag } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("learner");
  const [skills, setSkills] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedSkills = skills.split(",").map((skill) => skill.trim());

const success = await register(name, email, password, role, formattedSkills);
 // pass role

    if (success) {
      toast.success("User registered successfully!");
      setTimeout(() => navigate("/login"), 1000);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg rounded-2xl w-full max-w-md border border-gray-700 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Create an Account
        </h2>

        <div className="relative mb-4">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-10 p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="relative mb-4">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="relative mb-4">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <span
            className="absolute top-3 right-3 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="relative mb-6">
          <FaUserTag className="absolute top-3 left-3 text-gray-400" />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full pl-10 p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="learner">Learner</option>
            <option value="mentor">Mentor</option>
            <option value="builder">Builder</option>
          </select>
        </div>
        <div className="relative mb-6">
        <input
          type="text"
          placeholder="Skills (comma-separated, e.g. React,Node.js,UI/UX)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
        <button
          type="submit"
          className={`w-full p-3 rounded-lg font-semibold shadow-md transition-all duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
