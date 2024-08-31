import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'

import { FaBookOpen } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const NavbarComponent = () => {
    return (
        <Navbar className='px-4 md:px-0 py-2 shadow-lg sticky top-0 z-50'>
            <NavbarContainer>
                <NavbarBrand>
                    <div className='md:ml-16 lg:ml-12 text-cyan-800 flex justify-center items-center gap-4'>
                        <div className=''>
                            <FaBookOpen></FaBookOpen>
                        </div>

                        <Link to='/home' className='font-medium'>Al Quran Translation Project</Link>
                    </div>

                </NavbarBrand>
                <NavbarList>

                    <NavbarItem className=''>
                        <FaSearch></FaSearch>
                    </NavbarItem>

                    <Link to='/home'>
                        <NavbarItem className='text-lg'>
                            <FaHome></FaHome>
                        </NavbarItem>
                    </Link>

                    <NavbarItem className=''>Blog</NavbarItem>

                    <NavbarItem>Login</NavbarItem>

                    <NavbarItem active className='bg-cyan-800 hover:bg-slate-800 h-8 flex items-center'>Enroll as Contributor</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem className='text-xl'>
                        <FaSearch></FaSearch>
                    </NavbarItem>

                    <NavbarItem className='text-xl'>
                        <Link to='/home'>
                            <FaHome></FaHome>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Login</NavbarItem>
                    <NavbarItem active className='bg-cyan-800 hover:bg-slate-800 h-8 flex items-center'>Enroll as Contributor</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar >
    )
}
