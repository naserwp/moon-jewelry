// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import cate1 from '../../../assets/category/cate1.jpg';
import cate2 from '../../../assets/category/cate2.jpg';
import cate3 from '../../../assets/category/cate3.jpg';
import cate4 from '../../../assets/category/cate4.jpg';
import cate5 from '../../../assets/category/cate5.jpg';
import cate6 from '../../../assets/category/cate3.jpg';
import cate7 from '../../../assets/category/cate1.jpg';
import cate8 from '../../../assets/category/cate4.jpg';
import cate9 from '../../../assets/category/cate2.jpg';
import cate10 from '../../../assets/category/cate5.jpg';

const Category = () => {

    const categoryStyle = {
        // maxWidth: '100%', // Set maximum width to 100%
        // margin: '0 auto', // Center align horizontally
        backgroundImage: `url('../../../assets/category/cate_bg1.jpg')`, // Update the path to your background image
        backgroundSize: 'cover', // Set background image size to cover
    };


    return (
        <div style={categoryStyle}>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                loop={true}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate1} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 1</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate2} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 2</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate3} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 3</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate4} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 4</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate5} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 5</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate6} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 6</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate7} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 7</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate8} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 8</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate9} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 9</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full" src={cate10} alt="" />
                        <div className="h-28 bg-black bg-opacity-50 absolute inset-x-0 bottom-0 flex items-center justify-center">
                            <h2 className="text-center text-lg mt-4">Category 10</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
