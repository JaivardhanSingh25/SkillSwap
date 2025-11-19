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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join our skill-sharing community</p>
        </div>

        <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>

        <form onSubmit={submitHandler} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
            <input 
              type="number"
              name="age"
              value={formData.age}
              onChange={changeHandler}
              placeholder="Your age"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              placeholder="123-456-7890"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Create a strong password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Skills You Know</label>
            <input 
              type="text"
              name="skillKnown"
              placeholder="React, Node, Python"
              value={formData.skillKnown}
              onChange={changeHandler}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Skills You Want To Learn</label>
            <input 
              type="text"
              name="skillWanted"
              placeholder="JavaScript, DevOps"
              value={formData.skillWanted}
              onChange={changeHandler}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">Separate with commas</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
            <input 
              type="text"
              name="location"
              value={formData.location}
              onChange={changeHandler}
              placeholder="Your city"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign in</span>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignupForm;