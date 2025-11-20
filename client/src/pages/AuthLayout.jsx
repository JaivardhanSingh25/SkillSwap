import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const AuthLayout = () => {

  const location = useLocation();
  const path = location.pathname;

  const isSignup = path.includes("signup");

  return (
    <div className='w-screen min-h-screen relative overflow-hidden flex flex-col'>
      
      {/* Background */}
      <img src={assets.bgimage} className='absolute w-full h-full object-cover -z-10' alt="background"/>

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content Container - Centered */}
      <div className='flex-1 flex items-center justify-center px-6 py-12 relative'>
        
        {/* Floating Elements */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden hidden lg:block'>
          
          {/* Top Left */}
          <div className='absolute top-[15%] left-[8%]'>
            <div className='w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-4xl transform rotate-12'>
              ⚙️
            </div>
          </div>

          {/* Top Right */}
          <div className='absolute top-[20%] right-[10%]'>
            <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-3xl transform -rotate-12'>
              🎵
            </div>
          </div>

          {/* Bottom Left */}
          <div className='absolute bottom-[25%] left-[6%]'>
            <div className='w-18 h-18 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-4xl transform rotate-6'>
              📚
            </div>
          </div>

          {/* Bottom Right */}
          <div className='absolute bottom-[30%] right-[8%]'>
            <div className='w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-3xl transform -rotate-6'>
              💡
            </div>
          </div>

          {/* Middle Right */}
          <div className='absolute top-[50%] right-[6%]'>
            <div className='w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center text-2xl transform rotate-12'>
              💻
            </div>
          </div>

          {/* Middle Left */}
          <div className='absolute top-[55%] left-[12%]'>
            <div className='w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl flex items-center justify-center text-2xl transform -rotate-12'>
              ⭐
            </div>
          </div>

        </div>
        
        {/* Form Container - Centered */}
        <div className='w-full max-w-[580px] relative z-10'>
          {isSignup ? <SignupForm/> : <LoginForm/>}
        </div>

      </div>
    </div>
  )
}

export default AuthLayout