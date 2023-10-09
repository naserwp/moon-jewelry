import React from 'react';

const ViewJewelryDetails = ({ jewelryItem, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <img
              src={jewelryItem.image}
              alt={jewelryItem.title}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">{jewelryItem.title}</h2>
            <p className="text-gray-600 mb-4">{jewelryItem.description}</p>
            <div className="mb-4">
              <strong className="text-indigo-600">Price:</strong> {jewelryItem.price}
            </div>
            <div className="mb-4">
              <strong className="text-indigo-600">Additional Information:</strong> {jewelryItem.additional}
            </div>
            <div className="mb-4">
              <strong className="text-indigo-600">Size:</strong> {jewelryItem.size}
            </div>
            <div className="mb-4">
              <strong className="text-indigo-600">Category Type:</strong> {jewelryItem.categoryType}
            </div>
            <div className="mb-4">
              <strong className="text-indigo-600">Category Name:</strong> {jewelryItem.categoryName}
            </div>
            <div className="mb-4">
              <strong className="text-indigo-600">Sub Category:</strong> {jewelryItem.subCategory}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
            >
              Close
            </button>
            <button
              className="ml-2 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJewelryDetails;
