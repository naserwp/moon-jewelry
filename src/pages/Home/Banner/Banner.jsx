import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/banner/slider-1.jpg';
import banner2 from '../../../assets/banner/slider-2.jpg';
import banner3 from '../../../assets/banner/slider-3.jpg';

const Banner = () => {
    return (
        <div className="flex items-center justify-center">
            <Carousel swipeable={true} showStatus={false} showThumbs={false} autoPlay infiniteLoop>
                <div className="relative">
                    <img src={banner1} alt="Banner 1" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2  className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-4 fade-in-from-left">
                            Best of the Best <br /> MID YEAR SALE
                        </h2>
                    </div>
                    <p className="absolute bottom-10 left-0 right-0 text-white text-center bg-black bg-opacity-50 p-2">
                        Legend 1
                    </p>
                </div>
                <div>
                    <img src={banner2} alt="Banner 2" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-4">
                            Now up to 70% off <br /> MID YEAR SALE
                        </h2>
                    </div>
                    <p className="absolute bottom-10 left-0 right-0 text-white text-center bg-black bg-opacity-50 p-2">
                        Legend 2
                    </p>
                </div>
                <div>
                    <img src={banner3} alt="Banner 3" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-4">
                            Oh, Hello Newness! <br /> MID YEAR SALE
                        </h2>
                    </div>
                    <p className="absolute bottom-10 left-0 right-0 text-white text-center bg-black bg-opacity-50 p-2">
                        Legend 3
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
