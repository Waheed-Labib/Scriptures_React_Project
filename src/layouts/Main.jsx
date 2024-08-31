// import React from 'react';

import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../sections/navbar/Navbar";
import Footer from "../sections/footer/Footer";


const Main = () => {
    return (
        <div className="relative">
            <NavbarComponent></NavbarComponent>
            <div className="px-4 md:px-0 md:mx-16 lg:mx-12 my-8">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;