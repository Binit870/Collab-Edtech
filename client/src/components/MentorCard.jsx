import React from "react";

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 hover:shadow-lg transition duration-200 w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <img
          src={mentor.avatar || "/default-avatar.png"}
          alt="mentor-avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800">{mentor.name}</h3>
          <p className="text-sm text-gray-500 break-words">{mentor.expertise?.join(", ")}</p>
          <p className="text-sm text-gray-400 mt-1">{mentor.bio}</p>
        </div>
      </div>
      {mentor.linkedin && (
        <div className="mt-4 flex justify-center sm:justify-start">
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
          >
            Request Mentorship
          </a>
        </div>
      )}
    </div>
  );
};

export default MentorCard;
