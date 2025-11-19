import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='w-screen min-h-screen relative overflow-x-hidden mx-auto flex flex-col'>
      
      {/* Background */}
      <img src={assets.bgimage} className='absolute w-full h-full -z-10'/>

      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className='flex flex-col-reverse md:flex-row mt-10 justify-between items-center w-[calc(100vw-250px)] mx-auto gap-14'>

        {/* Left Text Block */}
        <div className='flex flex-col max-w-xl'>

          <h1 className='text-5xl leading-tight'>
            Swap Skills.
          </h1>

          <h1 className='text-5xl font-bold leading-tight'>
            Grow Together.
          </h1>

          <p className='mt-6 text-lg font-semibold text-gray-800'>
            No money. No pressure. Just pure skill exchange.
          </p>

          <p className='text-gray-700 leading-relaxed mt-2'>
            Share your strengths, learn from others, and level up without spending a dime. 
            Build connections that actually matter.
          </p>

          {/* CTA Buttons */}
          <div className='flex gap-4 mt-6'>
            <button className='px-6 py-3 rounded-xl bg-black text-white font-semibold hover:opacity-80 transition cursor-pointer'>
              Get Started
            </button>

            <button className='px-6 py-3 rounded-xl border border-black text-black font-semibold hover:bg-black/5 transition cursor-pointer'>
              Learn More
            </button>
          </div>

        </div>

        {/* Hero Illustration */}
        <img
          src={assets.landing}
          className='w-full sm:max-w-[300px] md:max-w-[400px] lg:max-w-[550px] h-auto object-contain'
        />

      </div>
    </div>
  )
}

export default Home