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
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SearchModal } from '../../components/search-modal/SearchModal';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';
import { server } from '../../constants.js';
import SuccessAlert from '../../components/success-alert/SuccessAlert.jsx';
import ErrorAlert from '../../components/error-alert/ErrorAlert.jsx';

export const NavbarComponent = () => {

    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogOut = () => {
        axios.post(`${server}/users/logout`, {}, {
            withCredentials: true
        }
        )
            .then(response => {
                setSuccessMsg(response.data.message);
                setLoggedInUser(null);
                localStorage.removeItem('user');
            })
            .catch(error => {
                const match = error.response.data.match(/<pre>Error: (.*?)<br>/);
                const errorMessage = match ? match[1] : "Unknown error";

                setErrorMsg(`Failed! ${errorMessage}`)
            })
    }


    const search = <NavbarItem className=''>
        <div onClick={() => setIsSearchModalOpen(true)}>
            <FaSearch></FaSearch>
        </div>
    </NavbarItem>

    const home = <Link to='/home'>
        <NavbarItem className='text-lg'>
            <FaHome></FaHome>
        </NavbarItem>
    </Link>

    const auth = <>
        {
            loggedInUser ?
                <>
                    <NavbarItem
                        active
                        onClick={handleLogOut}
                        className='h-8 flex items-center justify-center font-medium bg-red-100 text-red-800 hover:bg-red-800 hover:text-red-50 mx-4 lg:mx-2 mb-1 lg:mb-0 w-32'>Log out</NavbarItem>

                    <div className='flex items-end gap-1 text-gray-700 mx-4 lg:mx-0'>
                        <FaRegUser />
                        <p className='text-xs'>{loggedInUser?.fullName}</p>
                    </div>

                </>
                :
                <>
                    <Link to='/login'>
                        <NavbarItem>Login</NavbarItem>
                    </Link>

                    <Link to='/enroll'>
                        <NavbarItem active className='bg-cyan-700 hover:bg-slate-700 h-8 flex items-center font-medium'>Enroll as Contributor</NavbarItem>
                    </Link>
                </>
        }
    </>

    const navbarList = <>

        {search}

        {home}

        {auth}
    </>

    return (
        <>
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
                        {navbarList}
                    </NavbarList>

                    <NavbarCollapseBtn />
                    <NavbarCollapse>
                        {navbarList}
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

            <SuccessAlert
                success={successMsg}
                setSuccess={setSuccessMsg}
            ></SuccessAlert>

            <ErrorAlert
                error={errorMsg}
                setError={setErrorMsg}
            ></ErrorAlert>
        </>

    )
}
