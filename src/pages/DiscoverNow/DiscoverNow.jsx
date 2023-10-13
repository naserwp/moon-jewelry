import React from 'react';
import SectionHeading from '../../component/SectionHeading/SectionHeading';


// import SectionHeading from '../../../component/SectionHeading/SectionHeading';
const videoBackground = 'https://cdn.shopify.com/videos/c/vp/33b96d6501564bb9be82ec426072ed06/33b96d6501564bb9be82ec426072ed06.HD-1080p-4.8Mbps-10381755.mp4';
// mx-auto max-w-screen-xl

const DiscoverNow = () => {
    return (
        <div className='relative w-full py-24'>
            <video
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 w-full h-full object-cover '
      >
        <source src={videoBackground} type='video/mp4' />
      </video>

            {/* Section Content */}
            <div className='relative z-10 text-white text-center'>
            <SectionHeading
                subHeading={' Find the Perfect Jewelry for Every Occasion'}
                heading={'Explore it to Discover Now'}
            ></SectionHeading>
            <button className='px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer'>DISCOVER NOW</button>
            </div>
        </div>
    );
};

export default DiscoverNow;
