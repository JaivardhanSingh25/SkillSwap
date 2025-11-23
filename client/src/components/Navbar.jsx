import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isLogin = path.includes("admin");
  const isSignup = path.includes("signup");

  return (
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
        {<button className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 
            m:px-8 sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer">
            Home
          
        </button>}
        
        {/* About Us BUTTON */}
        {<button className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 sm:px-8 
            sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer"> 
            About Us
            
          </button>}

        {/* LOGIN BUTTON */}
        {isLogin ? null : <button 
          onClick={() => navigate('/admin')} 
          className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 
          sm:px-8 sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer"
        >
          Login
          
        </button>}
        

        {/* SIGNUP BUTTON */}
        {isSignup ? null : <button 
          onClick={() => navigate('/signup')} 
          className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-black text-white px-5 py-2 sm:px-8 
          sm:py-2 font-semibold transition hover:opacity-80 cursor-pointer"
        >
          Sign Up
          
        </button>
}
        
        
      </div>

    </div>
  )
}

export default Navbar