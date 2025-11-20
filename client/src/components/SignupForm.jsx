import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    skillKnown: "",
    skillWanted: "",
    location: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();

    const payload = {
      ...formData,
      skillKnown: formData.skillKnown.split(",").map(s => s.trim()),
      skillWanted: formData.skillWanted.split(",").map(s => s.trim()),
    };

    console.log("Final signup payload:", payload);
  }

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl p-10 sm:p-12">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Create Account</h1>
        <p className="text-gray-600 text-sm sm:text-base">Join our skill-sharing community</p>
      </div>

      {/* Decorative Line */}
      <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mb-8 rounded-full"></div>

      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter your name"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
          <input 
            type="number"
            name="age"
            value={formData.age}
            onChange={changeHandler}
            placeholder="Your age"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="your@email.com"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={changeHandler}
            placeholder="123-456-7890"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        

        {/* Skills You Know */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Skills You Know</label>
          <input 
            type="text"
            name="skillKnown"
            placeholder="React, Node, Python"
            value={formData.skillKnown}
            onChange={changeHandler}
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
          <p className="text-xs text-gray-500 mt-1.5">Separate with commas</p>
        </div>

        {/* Skills You Want To Learn */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Skills You Want To Learn</label>
          <input 
            type="text"
            name="skillWanted"
            placeholder="JavaScript, DevOps"
            value={formData.skillWanted}
            onChange={changeHandler}
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
          <p className="text-xs text-gray-500 mt-1.5">Separate with commas</p>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
          <input 
            type="text"
            name="location"
            value={formData.location}
            onChange={changeHandler}
            placeholder="Your city"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>
        
        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Create a strong password"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 mt-6"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign in</span>
        </p>

      </form>
    </div>
  );
};

export default SignupForm;