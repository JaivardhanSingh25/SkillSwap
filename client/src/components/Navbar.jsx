import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  
  

  return (
    <div className='flex justify-between items-center py-3 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <div className='flex gap-3'>
        <img src={assets.logo} alt='logo' className='w-32 sm:w-15'/>
        <span className='text-6xl font-semibold'>SkillSwap</span>
      </div>
      <div className='flex gap-2'>
        <button onClick={() => {navigate('/admin')}} className='flex items-center gap-2 rounded-full
       text-sm cursor-pointer bg-black text-white px-10 py-2 font-semibold'>
        {false ? 'Dashboard' : 'Login'}
        <img src={assets.arrow} alt='login' className='w-3'/>
      </button>
      <button onClick={() => {navigate('/admin')}} className='flex items-center gap-2 rounded-full
       text-sm cursor-pointer bg-black text-white px-10 py-2 font-semibold'>
        Sign Up
        <img src={assets.arrow} alt='login' className='w-3'/>
      </button>
      </div>
      
    </div>
  )
}

export default Navbar;