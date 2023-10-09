// import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
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

        {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Confirm your password"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
            Photo URL (Optional)
          </label>
          <input
            type="text"
            id="photoUrl"
            name="photoUrl"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your photo URL"
          />
        </div>

        {/* Gender (Optional) */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender (Optional)
          </label>
          <select
            id="gender"
            name="gender"
            className="mt-1 p-2 w-full border rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Phone Number (Optional) */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address (Optional) */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address (Optional)
          </label>
          <textarea
            id="address"
            name="address"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your address"
          ></textarea>
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
