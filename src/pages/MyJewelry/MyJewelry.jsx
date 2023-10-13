// import React, { useState } from 'react';

import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const MyJewelry = () => {
  useTitle('My Jewelry List') 

  const [jewelryList, setJewelryList] = useState([
    {
      id: 1,
      name: 'Elegant Diamond Necklace',
      title: 'Elegant Diamond Necklace',
      image: 'image_url_1.jpg',
      description: 'A beautiful necklace with a stunning diamond pendant.',
    },
    {
      id: 2,
      name: 'Gold Hoop Earrings',
      title: 'Gold Hoop Earrings',
      image: 'image_url_2.jpg',
      description: 'Stylish gold hoop earrings for any occasion.',
    },
    {
      id: 3,
      name: 'Gold Hoop Earrings',
      title: 'Gold Hoop Earrings',
      image: 'image_url_2.jpg',
      description: 'Stylish gold hoop earrings for any occasion.',
    },
    {
      id: 4,
      name: 'Gold Hoop Earrings',
      title: 'Gold Hoop Earrings',
      image: 'image_url_2.jpg',
      description: 'Stylish gold hoop earrings for any occasion.',
    },
    // Add more jewelry items here...
  ]);

  const handleAddJewelry = () => {
    // Add a new jewelry item to the list
    const newJewelryItem = {
      id: jewelryList.length + 1,
      name: 'New Jewelry',
      title: 'New Jewelry',
      image: 'image_url_new.jpg',
      description: 'Description of the new jewelry item.',
    };
    setJewelryList([...jewelryList, newJewelryItem]);
  };

  const handleRemoveJewelry = (id) => {
    // Remove a jewelry item from the list based on its ID
    const updatedJewelryList = jewelryList.filter((jewelry) => jewelry.id !== id);
    setJewelryList(updatedJewelryList);
  };

  const handleEditJewelry = (id) => {
    // Implement your edit functionality here
    // You can open a modal or navigate to an edit page
    alert(`Edit Jewelry with ID: ${id}`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">My Jewelry</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jewelryList.map((jewelry) => (
          <div
            key={jewelry.id}
            className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={jewelry.image}
              alt={jewelry.name}
              className="mb-4 rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">{jewelry.title}</h2>
            <p className="text-gray-600">{jewelry.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => handleRemoveJewelry(jewelry.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Remove
              </button>
              <button
                onClick={() => handleEditJewelry(jewelry.id)}
                className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={handleAddJewelry}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add Jewelry
        </button>
      </div>
    </div>
  );
};

export default MyJewelry;
