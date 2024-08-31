import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import Hero from "../hero/Hero";
import { useScroll } from "../../../hooks/useScroll";

const Home = () => {

    useScroll();

    return (
        <div className="">

            <Hero></Hero>

            <div className="">
                <SurahListHome></SurahListHome>
            </div>
        </div>
    );
};

export default Home;