/* eslint-disable react/prop-types */
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
import { useState } from 'react';
import { SearchModal } from '../../components/search-modal/SearchModal';

export const NavbarComponent = () => {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

    return (
        <Navbar className='h-[10vh] px-4 md:px-0 flex justify-center items-center shadow-lg sticky top-0 z-10'>
            <NavbarContainer className=''>
                <NavbarBrand>
                    <div className='text-cyan-800 hover:text-slate-700 flex justify-center items-center gap-4 text-xl'>
                        <div className='mt-1'>
                            <FaBookOpen></FaBookOpen>
                        </div>

                        <Link to='/home' className='font-semibold'>Translate Quran</Link>
                    </div>

                </NavbarBrand>
                <NavbarList>

                    <NavbarItem className=''>
                        <div onClick={() => setIsSearchModalOpen(true)}>
                            <FaSearch></FaSearch>
                        </div>
                    </NavbarItem>

                    <Link to='/home'>
                        <NavbarItem className='text-lg'>
                            <FaHome></FaHome>
                        </NavbarItem>
                    </Link>

                    <NavbarItem className=''>Blog</NavbarItem>

                    <NavbarItem>Login</NavbarItem>

                    <NavbarItem active className='bg-cyan-700 hover:bg-slate-700 h-8 flex items-center'>Enroll as Contributor</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem className='text-xl'>
                        <div onClick={() => setIsSearchModalOpen(true)}>
                            <FaSearch></FaSearch>
                        </div>
                    </NavbarItem>

                    <NavbarItem className='text-xl'>
                        <Link to='/home'>
                            <FaHome></FaHome>
                        </Link>
                    </NavbarItem>

                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Login</NavbarItem>
                    <NavbarItem active className='bg-cyan-700 hover:bg-slate-700 h-8 flex items-center'>Enroll as Contributor</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>

            {
                isSearchModalOpen &&
                <SearchModal
                    isSearchModalOpen={isSearchModalOpen}
                    setIsSearchModalOpen={setIsSearchModalOpen}
                ></SearchModal>
            }
        </Navbar >
    )
}
