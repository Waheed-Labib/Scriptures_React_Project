// import React from 'react';

import { useContext } from "react";
import SurahListSideBar from "../surah-list-side-bar/surah-list-side-bar/SurahListSideBar";
import { SurahContext } from "../../../../contexts/SurahProvider";


const LeftSideBar = () => {

    const { surahList, loading, error } = useContext(SurahContext)

    return (
        <div className="">
            <SurahListSideBar
                surahList={surahList}
                loading={loading}
                error={error}
            ></SurahListSideBar>
        </div>
    );
};

export default LeftSideBar;