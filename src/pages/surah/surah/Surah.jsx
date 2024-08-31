// import React from 'react';

import { useScroll } from "../../../hooks/useScroll";
import { useSurahId } from "../../../hooks/useSurahId";
import { useVerses } from "../../../hooks/useVerses";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/right-side-bar/RightSideBar";
import SurahContent from "../surah-content/SurahContent";

const Surah = () => {

    useScroll();

    const surahId = useSurahId();
    const { verses, loading, error } = useVerses()
    console.log(verses, loading, error)

    return (
        <div className="flex">
            <div className="w-1/5">
                <LeftSideBar></LeftSideBar>
            </div>

            <div className="w-3/5">
                <SurahContent
                    surahId={surahId}
                ></SurahContent>
            </div>

            <div className="w-1/5">
                <RightSideBar surahId={surahId}></RightSideBar>
            </div>
        </div>
    );
};

export default Surah;