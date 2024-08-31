// import React from 'react';

import { useScroll } from "../../../hooks/useScroll";
import { useSurahId } from "../../../hooks/useSurahId";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/right-side-bar/RightSideBar";
import SurahContent from "../surah-content/SurahContent";

const Surah = () => {

    useScroll();

    const surahId = useSurahId();

    return (
        <div className="flex">
            <div className="w-1/5">
                <LeftSideBar></LeftSideBar>
            </div>

            <div className="w-3/5">
                <SurahContent></SurahContent>
            </div>

            <div className="w-1/5">
                <RightSideBar surahId={surahId}></RightSideBar>
            </div>
        </div>
    );
};

export default Surah;