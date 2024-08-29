// import React from 'react';

import LeftSideBar from "../left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/RightSideBar";
import SurahContent from "../surah-content/SurahContent";

const Surah = () => {
    return (
        <div className="flex">
            <div className="w-1/5">
                <LeftSideBar></LeftSideBar>
            </div>

            <div className="w-3/5">
                <SurahContent></SurahContent>
            </div>

            <div className="w-1/5">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Surah;