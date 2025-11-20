import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = "flex items-center gap-3 px-4 py-3 rounded-md font-medium transition";

  return (
    <div className="w-60 h-screen bg-white border-r border-gray-300 flex flex-col py-6">
      <h1 className="text-2xl font-bold px-4 mb-6">Dashboard</h1>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-black text-white hover:bg-black" : "hover:bg-black/10"}`
          }
        >
          🔍 Search
        </NavLink>

        <NavLink
          to="/admin/requests"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-black text-white hover:bg-black" : "hover:bg-black/10"}`
          }
        >
          📩 Requests
        </NavLink>

        <NavLink
          to="/admin/connections"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-black text-white hover:bg-black" : "hover:bg-black/10"}`
          }
        >
          🤝 Connections
        </NavLink>

        <NavLink
          to="/admin/editProfile"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? "bg-black text-white hover:bg-black" : "hover:bg-black/10"}`
          }
        >
          📝 Edit Profile
        </NavLink>

        <button className="mt-6 text-left px-4 py-3 font-medium text-red-600 hover:bg-red-100 rounded-md transition cursor-pointer">
          🚪 Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;