import React, { useState } from 'react';
import api from '../api/axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../slices/authSlice'; 
import toast from 'react-hot-toast';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const dispatch = useDispatch();

  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    try{
      const {data} = await api.post('/api/auth/login', formData)        // api call
      
      //console.log(data)

      const token = data.token;
      const userID = data.userID;                      // so this works man.. i got the userID in here 

      

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      dispatch(loginSuccess({token, userID}));

    }

    catch(err){
      console.log(err.message)
      toast.error("Login Failed")

    }
    
    //console.log("Login payload:", formData);

    // Later:
    // axios.post("/api/auth/login", formData)
  }

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl p-10 sm:p-12">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-gray-600 text-sm sm:text-base">Login to your account</p>
      </div>

      {/* Decorative Line */}
      <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mb-8 rounded-full"></div>

      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-5">

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

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter your password"
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder:text-gray-400 text-base"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="mr-2 w-4 h-4 accent-blue-500" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Forgot password?
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 mt-6"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account? <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign up</span>
        </p>

      </form>
    </div>
  );
};

export default LoginForm;