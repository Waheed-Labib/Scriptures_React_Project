
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'

export const NavbarComponent = () => {
    return (
        <Navbar className='px-4 md:px-0'>
            <NavbarContainer>
                <NavbarBrand>
                    <h1 className='md:ml-16 lg:ml-12 text-lg font-semibold text-gray-500'>Al Quran Translation Project</h1>
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
                    <NavbarItem active>Enroll as Contributor</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
