import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import HomePageHeroSection from "../home-page-hero-section/HomePageHeroSection";
import { Helmet } from "react-helmet";

const Home = () => {

    useScrollToTop();

    return (
        <div className="">

            <Helmet>
                <title>Home ~ Translate Quran</title>

                <meta name="description" content="Al Quran Translation Project Home Page" />

                <meta name="keyword" content="quran, quran translation, quran chapter, surah" />
            </Helmet>

            <HomePageHeroSection></HomePageHeroSection>

            <div className="my-8">
                <SurahListHome></SurahListHome>
            </div>
        </div>
    );
};

export default Home;