// src/components/MentorCard.js

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const MentorCard = ({ mentor }) => {
  return (
    // Main card container
    <div className="bg-cyan-800 shadow-md rounded-lg p-4 flex items-start space-x-4 transition duration-300 hover:scale-100 hover:shadow-xl hover:shadow-blue-500/20">
      
      {/* Icon Section */}
      <div className="flex-shrink-0">
        {/* Using a brighter gray for the icon */}
        <FaUserCircle className="w-16 h-16 text-white" /> {/* CHANGED */}
      </div>

      {/* Details Section */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
        {/* Brighter text for expertise */}
        <p className="text-sm text-white">{mentor.expertise.join(' • ')}</p> {/* CHANGED */}
        {/* Brighter text for bio */}
        <p className="mt-2 text-white">{mentor.bio}</p> {/* CHANGED */}
        <a 
          href={mentor.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
            Request Mentorship
          </button>
        </a>
      </div>

    </div>
  );
};

export default MentorCard;