import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log("Login payload:", formData);

    // Later:
    // axios.post("/api/auth/login", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to your account</p>
        </div>

        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>

        <div onSubmit={submitHandler} className="space-y-5">

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
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2 w-4 h-4 accent-blue-500" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            onClick={submitHandler}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign up</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;