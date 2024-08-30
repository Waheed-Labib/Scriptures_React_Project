// import React from 'react';

import { useContext } from "react";
import { SurahContext } from "../../../contexts/SurahProvider";
import SurahListHome from "../surah-list-home/surah-list-home/SurahListHome";
import Hero from "../hero/Hero";


const Home = () => {
    const { surahList, loading, error } = useContext(SurahContext)

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