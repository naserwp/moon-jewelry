import useTitle from "../../../hooks/useTitle";
import DiscoverNow from "../../DiscoverNow/DiscoverNow";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import HotList from "../HotList/HotList";
import PopularJewelrySection from "../PopularJewelrySection/PopularJewelrySection";



const Home = () => {
    useTitle('Jewelry Shop') 
    return (
        <div>
            <div>
                <Banner></Banner>
                <Category></Category>
                <PopularJewelrySection></PopularJewelrySection>
                <DiscoverNow></DiscoverNow>
                <HotList></HotList>
            </div>
        </div>
    );
};

export default Home;