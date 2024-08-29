
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
        <Navbar>
            <NavbarContainer>
                <NavbarBrand>
                    <h1 className='ml-12 text-lg font-semibold text-gray-500'>Al Quran Translation Project</h1>
                </NavbarBrand>
                <NavbarList>
                    {/* <NavbarItem>Figma</NavbarItem> */}
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem>Login</NavbarItem>
                    <NavbarItem active>Enroll as Contributor</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                    <NavbarItem active>Get Started</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
