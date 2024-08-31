import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import Hero from "../hero/Hero";
import { useScroll } from "../../../hooks/useScroll";
import { useSurah } from "../../../hooks/useSurah";


const Home = () => {

    useScroll();

    const { surahList, loading, error } = useSurah();

    return (
        <div className="">

            <Hero></Hero>

            <div className="">
                <SurahListHome
                    surahList={surahList}
                    loading={loading}
                    error={error}
                ></SurahListHome>
            </div>
        </div>
    );
};

export default Home;