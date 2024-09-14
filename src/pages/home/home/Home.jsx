import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import Hero from "../hero/Hero";
import { useScrollToTop } from "../../../hooks/useScrollToTop";

const Home = () => {

    useScrollToTop();

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