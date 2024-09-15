// import React from 'react';

import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";
import { useState } from "react";

const Main = () => {

    const [chapterNum, setChapterNum] = useState(null);

    return (
        <div className="relative">
            <NavbarComponent
                chapterNum={chapterNum}
                setChapterNum={setChapterNum}
            ></NavbarComponent>

            <div className="px-4 md:px-0 md:mx-12 lg:mx-8 mt-2">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;