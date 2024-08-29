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

export const NavbarComponent = () => {
    return (
        <Navbar className='px-4 md:px-0 shadow-xl'>
            <NavbarContainer>
                <NavbarBrand>
                    <div className='md:ml-16 lg:ml-12 text-2xl text-cyan-500 flex justify-center items-center gap-4'>
                        <div className='text-cyan-600'>
                            <FaBookOpen></FaBookOpen>
                        </div>

                        <h1 className='font-semibold'>Al Quran Translation Project</h1>
                    </div>

                </NavbarBrand>
                <NavbarList>
                    {/* <NavbarItem>Figma</NavbarItem> */}
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Login</NavbarItem>
                    <NavbarItem active className='bg-cyan-600'>Enroll as Contributor</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Login</NavbarItem>
                    <NavbarItem active className='bg-cyan-600'>Enroll as Contributor</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar >
    )
}
