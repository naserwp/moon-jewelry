import React, { useState, useEffect } from 'react';

const AllJewelry = () => {
  const [jewelryData, setJewelryData] = useState([]);
  const [visibleJewelry, setVisibleJewelry] = useState(3); // Initially, show 3 cards
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  useEffect(() => {
    // Fetch data from your jewelry.json file
    fetch('/jewelry.json') // Replace with the actual path to your jewelry.json file
      .then((response) => response.json())
      .then((data) => {
        // Assuming your JSON file contains an array of jewelry data
        setJewelryData(data);
      })
      .catch((error) => {
        console.error('Error fetching jewelry data:', error);
      });
  }, []);

  const loadMoreJewelry = () => {
    // Increase the number of visible cards by 3
    const newVisibleJewelry = visibleJewelry + 3;
    setVisibleJewelry(newVisibleJewelry);

    // Check if there are more cards to load
    if (newVisibleJewelry >= jewelryData.length) {
      setLoadMoreVisible(false); // No more cards to load
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">All Jewelry</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jewelryData.slice(0, visibleJewelry).map((jewelry) => (
          <div
            key={jewelry.id}
            className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={jewelry.image}
              alt={jewelry.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{jewelry.title}</h2>
            <p className="text-gray-600">{jewelry.description}</p>
            <p className="text-gray-600">Price: {jewelry.price}</p>
            <p className="text-gray-600">Additional: {jewelry.additional}</p>
            <p className="text-gray-600">Size: {jewelry.size}</p>
            <p className="text-gray-600">Category Type: {jewelry.categoryType}</p>
            <p className="text-gray-600">Category Name: {jewelry.categoryName}</p>
            <p className="text-gray-600">Sub Category: {jewelry.subCategory}</p>
          </div>
        ))}
      </div>
      {loadMoreVisible && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMoreJewelry}
            className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default AllJewelry;
