// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { NavbarComponent } from "../components/navbar/Navbar";

const Main = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            {/* <Outlet></Outlet>
            <Footer></Footer> */}
        </div>
    );
};

export default Main;