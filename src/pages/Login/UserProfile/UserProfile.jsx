// import React, { useState } from 'react';

import { useState } from "react";

const UserProfile = () => {
  // User info state
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    profilePic: 'https://example.com/profile-pic.jpg',
    newPassword: '',
    notes: '',
    totalJewelry: 0,
  });

  // Form input change handlers
  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    setUserInfo({ ...userInfo, profilePic: e.target.value });
  };

  const handleNewPasswordChange = (e) => {
    setUserInfo({ ...userInfo, newPassword: e.target.value });
  };

  const handleNotesChange = (e) => {
    setUserInfo({ ...userInfo, notes: e.target.value });
  };

  const handleTotalJewelryChange = (e) => {
    setUserInfo({ ...userInfo, totalJewelry: parseInt(e.target.value) });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to update user info (e.g., send a request to the server)
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={userInfo.name}
            onChange={handleNameChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile Picture URL</label>
          <input
            type="text"
            value={userInfo.profilePic}
            onChange={handleProfilePicChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={userInfo.newPassword}
            onChange={handleNewPasswordChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            value={userInfo.notes}
            onChange={handleNotesChange}
            className="mt-1 p-2 w-full h-32 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Total My Jewelry</label>
          <input
            type="number"
            value={userInfo.totalJewelry}
            onChange={handleTotalJewelryChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
