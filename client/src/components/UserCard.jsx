import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition-all duration-300 w-full sm:max-w-sm md:max-w-md">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt="avatar"
          className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{user.skills?.join(", ")}</p>
          <p className="text-sm text-gray-400 mt-1">
            {user.bio || "No bio provided"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
