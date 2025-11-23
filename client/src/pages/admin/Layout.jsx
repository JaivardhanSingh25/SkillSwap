import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";


const Layout = () => {
  
  
  
  const navigate = useNavigate();
  
  
  
  return (
    <div className="w-screen min-h-screen relative overflow-hidden flex flex-col">

      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-6 sm:px-16 xl:px-28">
      
            {/* Logo Section */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src={assets.logo} alt="logo" className="w-10 sm:w-12" />
              <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                SkillSwap
              </span>
            </div>
      
            {/* Buttons */}
            <div className="flex gap-3">
      
              {/* Home BUTTON */}
              {<button 
                
                className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 
                sm:px-8 sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer"
              >
                Home 
              </button>}
              
      
              {/* About Us BUTTON */}
              {<button 
                 
                className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 sm:px-8 
                sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer"
              >
                About Us
              </button>
      }
              
              
            </div>
      
          </div>

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