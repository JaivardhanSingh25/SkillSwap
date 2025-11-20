import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";

const Layout = () => {
  return (
    <div className="w-screen min-h-screen relative overflow-hidden flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Background */}
      <img
        src={assets.bgimage}
        className="absolute inset-0 w-full h-full -z-10 object-cover"
      />

      {/* Content layout */}
      <div className="flex w-full h-[calc(100vh-70px)] mt-2">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;