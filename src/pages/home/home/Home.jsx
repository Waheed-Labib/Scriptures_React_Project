import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import HomePageHeroSection from "../home-page-hero-section/HomePageHeroSection";

const Home = () => {

    useScrollToTop();

    return (
        <div className="">

            <HomePageHeroSection></HomePageHeroSection>

            <div className="my-8">
                <SurahListHome></SurahListHome>
            </div>
        </div>
    );
};

export default Home;