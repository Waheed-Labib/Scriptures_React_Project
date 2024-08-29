// import React from 'react';

import { useContext } from "react";
import { SearchBar } from "../../../components/search-bar/SearchBar";
import SurahList from "../../../components/surah-list/SurahList";
import { SurahContext } from "../../../contexts/SurahProvider";

const Home = () => {
    const { surahList, loading, error } = useContext(SurahContext)

    return (
        <div className="">
            <SearchBar name="surah" label="Search by Chapter Name" type="text"></SearchBar>

            <div className="mt-12">
                <SurahList
                    surahList={surahList}
                    loading={loading}
                    error={error}
                ></SurahList>
            </div>
        </div>
    );
};

export default Home;