import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="text-white py-5 mt-auto w-full"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // dark blue gradient
      }}
    >
      <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
        
        {/* Left: Copyright */}
        <div className="text-gray-300">
          &copy; {new Date().getFullYear()} CollabEdTech. All rights reserved.
        </div>

        {/* Right: Navigation + Socials */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">

          {/* Navigation */}
          <div className="flex flex-wrap gap-5 text-white">
            
            <Link to="/FAQs" className="hover:text-blue-400 transition">FAQs</Link>
            <Link to="/AboutUS" className="hover:text-blue-400 transition">About Us</Link>
            <Link to="/Contact" className="hover:text-blue-400 transition">Contacts</Link>
            <Link to="/Privacy" className="hover:text-blue-400 transition">Privacy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-white text-lg">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaLinkedinIn />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
