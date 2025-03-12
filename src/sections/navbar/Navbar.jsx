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

import { FaBookOpenReader } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SearchModal } from '../../components/search-modal/SearchModal';

export const NavbarComponent = () => {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

    return (
        <Navbar style={{ fontFamily: '"Roboto", sans-serif' }} className='h-[10vh] px-4 flex justify-center items-center shadow-lg sticky top-0 z-10'>
            <NavbarContainer className=''>
                <NavbarBrand>
                    <div className='text-cyan-800 hover:text-slate-700 flex justify-center items-center gap-4'>
                        <div className='text-lg'>
                            <FaBookOpenReader></FaBookOpenReader>
                        </div>

                        <Link to='/home' className='tracking-wider text-xl'>Translate Quran</Link>
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

                    <Link to='/login'>
                        <NavbarItem>Login</NavbarItem>
                    </Link>

                    <Link to='/enroll'>
                        <NavbarItem active className='bg-cyan-700 hover:bg-slate-700 h-8 flex items-center font-medium'>Enroll as Contributor</NavbarItem>
                    </Link>

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

                    <Link to='/login'>
                        <NavbarItem>Login</NavbarItem>
                    </Link>

                    <Link to='/enroll'>
                        <NavbarItem active className='bg-cyan-700 hover:bg-slate-700 h-8 flex items-center font-medium'>Enroll as Contributor</NavbarItem>
                    </Link>

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
