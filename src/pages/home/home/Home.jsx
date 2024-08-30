// import React from 'react';

import { useContext } from "react";
import { SearchBar } from "../../../components/search-bar/SearchBar";
import { SurahContext } from "../../../contexts/SurahProvider";
import SurahListHome from "../surah-list-home/SurahListHome";

const Home = () => {
    const { surahList, loading, error } = useContext(SurahContext)

    return (
        <div className="">
            <SearchBar name="surah" label="Search by Chapter Name" type="text"></SearchBar>

            <div className="mt-12">
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