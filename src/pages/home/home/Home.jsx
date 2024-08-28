// import React from 'react';

import LeftSideBar from "../left-side-bar/LeftSideBar";
import MainContent from "../main-content/MainContent";
import RightSideBar from "../right-side-bar/RightSideBar";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/5">
                <LeftSideBar></LeftSideBar>
            </div>

            <div className="w-3/5">
                <MainContent></MainContent>
            </div>

            <div className="1/5">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Home;