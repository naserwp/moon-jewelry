import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import SectionHeading from '../../../component/SectionHeading/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS

const HotList = () => {
  const [jewelryData, setJewelryData] = useState([]);

  useEffect(() => {
    // Fetch jewelry data from the provided URL
    fetch('https://jewelry-shop-server-foap0zec1-naserwp.vercel.app/jewelry')
      .then((response) => response.json())
      .then((data) => setJewelryData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='mx-auto max-w-screen-xl py-24'>
      <SectionHeading
        subHeading={'ON TREND HOT JEWELLERY'}
        heading={'The Hot List'}
      ></SectionHeading>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3} // Adjust the number of slides per view as needed
        spaceBetween={20} // Adjust spacing between slides as needed
        navigation={true} // Enable navigation buttons (optional)
        loop={true} // Infinite loop
        autoplay={{
          delay: 1000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Autoplay continues even when the user interacts with the slider
        }}
      >
        {jewelryData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-xl font-semibold">{item.price}</div>
                  <div className="text-green-600 font-semibold">
                    {item.discountRate}
                  </div>
                </div>
                <div className="mt-4">
                  <button className="bg-indigo-600 text-white py-2 px-4 rounded-md mr-2">
                    Add to Cart
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="bg-amber-500 text-white py-2 px-4 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotList;
