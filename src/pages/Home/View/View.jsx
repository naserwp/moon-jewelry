import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:30001/jewelry/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error('Error fetching item data:', error);
      });
  }, [id]);

  return (
    <div>
      {item ? (
        <div>
          {/* Banner Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96"
          />

          {/* Content */}
          <div className="container mx-auto py-8">
            <div className="bg-white p-8 rounded shadow-md">
              <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Price: {item.price}</p>
                <p className="text-gray-600">Size: {item.size}</p>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-600">Additional: {item.additional}</p>
              <p className="text-gray-600">Category Type: {item.categoryType}</p>
              <p className="text-gray-600">Category Name: {item.categoryName}</p>
              <p className="text-gray-600">Sub Category: {item.subCategory}</p>
            </div>

            {/* Additional Content Images */}
            {item.additionalImages && item.additionalImages.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {item.additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Additional Image ${index + 1}`}
                    className="w-full h-auto rounded shadow-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default View;
