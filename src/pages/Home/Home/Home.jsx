import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularJewelrySection from "../PopularJewelrySection/PopularJewelrySection";



const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Category></Category>
                <PopularJewelrySection></PopularJewelrySection>
            </div>
        </div>
    );
};

export default Home;