import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const View = () => {
  const { id } = useParams(); // Access the "id" parameter from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch data based on the "id" parameter
    fetch(`http://localhost:30001/jewelry/${id}`) // Replace with API endpoint
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
          <h2>{item.title}</h2>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default View;
