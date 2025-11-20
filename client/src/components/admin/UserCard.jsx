import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{user.name}</h3>

      <p className="mt-2 text-gray-700">
        <strong>Skill:</strong> {user.skill}
      </p>

      <p className="text-gray-700">
        <strong>Location:</strong> {user.location}
      </p>

      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:opacity-80 transition">
        View Profile
      </button>
    </div>
  );
};

export default UserCard;