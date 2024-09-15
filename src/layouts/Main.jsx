// import React from 'react';

import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";

const Main = () => {

    return (
        <div className="relative">
            <NavbarComponent></NavbarComponent>
            <div className="px-4 md:px-0 md:mx-12 lg:mx-8 mt-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;