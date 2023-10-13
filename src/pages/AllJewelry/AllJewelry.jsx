import React, { useState, useEffect } from 'react';
import SectionHeading from '../../component/SectionHeading/SectionHeading';
import useTitle from '../../hooks/useTitle';

const AllJewelry = () => {
  const [jewelryData, setJewelryData] = useState([]);
  const [visibleJewelry, setVisibleJewelry] = useState(3);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [originalData, setOriginalData] = useState([]);

  useTitle('All Jewelry');

  useEffect(() => {
    fetch('https://jewelry-shop-server-foap0zec1-naserwp.vercel.app/jewelry')
      .then((response) => response.json())
      .then((data) => {
        setJewelryData(data);
        setOriginalData(data);
      })
      .catch((error) => {
        console.error('Error fetching jewelry data:', error);
      });
  }, []);

  const loadMoreJewelry = () => {
    const newVisibleJewelry = visibleJewelry + 3;
    setVisibleJewelry(newVisibleJewelry);

    if (newVisibleJewelry >= originalData.length) {
      setLoadMoreVisible(false);
    }
  };

  useEffect(() => {
    // Sort the data when sortOrder changes
    const sortedData = [...originalData];
    sortedData.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price.localeCompare(b.price);
      } else {
        return b.price.localeCompare(a.price);
      }
    });
    setJewelryData(sortedData);
  }, [sortOrder]);

  useEffect(() => {
    // Filter the data when searchQuery changes
    const filteredData = originalData.filter((jewelry) =>
      jewelry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jewelry.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setJewelryData(filteredData);
    setVisibleJewelry(3); // Reset the visible jewelry items when search query changes
    setLoadMoreVisible(filteredData.length > 3);
  }, [searchQuery, originalData]);

  return (
    <div>
      <div className="bg-amber-200 w-full py-24">
        <div className="container mx-auto max-w-screen-xl">
          <SectionHeading
            heading={'Jewelry Collection'}
            subHeading={'Discover our exquisite collection of jewelry updated for 2021!'}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl py-24">
        <div className="mb-4 flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div className="w-full md:w-auto">
              <label className="block md:inline-block">Sort by Price:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full md:w-auto"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div className="w-full md:w-auto">
              <label className="block md:inline-block">Search by Name or Description:</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full md:w-auto border-2 rounded border-blue-400 m-1 p-1"
              />
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default AllJewelry;
