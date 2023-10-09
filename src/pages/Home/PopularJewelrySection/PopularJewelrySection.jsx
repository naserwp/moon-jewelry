import React, { useEffect, useState } from 'react';
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import ViewJewelryDetails from '../../viewJewelryDetails/viewJewelryDetails';
import { Link } from 'react-router-dom';


const PopularJewelrySection = () => {
  const [popularJewelry, setPopularJewelry] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [selectedJewelry, setSelectedJewelry] = useState(null);

  useEffect(() => {
    // Fetch data from jewelry.json when the component mounts
    fetch('https://jewelry-shop-server-ashy.vercel.app/jewelry') // Replace with the actual path to your jewelry.json file
      .then((response) => response.json())
      .then((data) => {
        // Filter or process the data if needed
        setPopularJewelry(data);
      })
      .catch((error) => {
        console.error('Error fetching jewelry data:', error);
      });
  }, []);

  const loadMoreItems = () => {
    setVisibleItems(popularJewelry.length);
    setShowLoadMore(false);
  };

  const viewJewelryDetails = (jewelryItem) => {
    setSelectedJewelry(jewelryItem);
  };

  const closeJewelryDetails = () => {
    setSelectedJewelry(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-semibold mb-6">Popular Jewelry</h2>
      <SectionHeading
        subHeading={"Explore a world of stunning jewelry pieces curated just for you"}
        heading={"Discover Exquisite Jewelry Pieces"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularJewelry.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <button
              className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer mr-2"
            >
             
             <Link to={`/view/${item.id}`}>View to see</Link>

            </button>
            <button
              onClick={() => viewJewelryDetails(item)}
              className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer mr-2"
            >
              View Details
            </button>
            <button className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {showLoadMore && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMoreItems}
            className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
      {selectedJewelry && (
        <ViewJewelryDetails
          jewelryItem={selectedJewelry}
          onClose={closeJewelryDetails}
        />
      )}
    </div>
  );
};

export default PopularJewelrySection;
