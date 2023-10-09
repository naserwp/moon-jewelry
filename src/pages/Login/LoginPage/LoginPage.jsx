// import React from 'react';
import { FaBeer, FaFacebookF, FaGoogle, FaTwitter, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <div className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <FaUserAlt></FaUserAlt>
          Login
        </div>


        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your username"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        <hr className="my-6 border-t" />

        {/* Social Logins */}
        <div className="flex items-center space-x-4">
          <span className="text-gray-500">Or login with:</span>
          <button className="text-3xl text-indigo-600 hover:text-indigo-700">
            <i className="fab fa-facebook"></i>
            <FaFacebookF></FaFacebookF>
          </button>
          <button className="text-3xl text-blue-400 hover:text-blue-500">
            <FaTwitter></FaTwitter>
          </button>
          <button className="text-3xl text-red-600 hover:text-red-700">
            <FaGoogle></FaGoogle>
          </button>
        </div>
        <div>
          <p>If you haven't created an account yet, you can easily do so by  <Link to="/signup" className="text-red-700 font-bold underline">signing up here</Link>.</p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
