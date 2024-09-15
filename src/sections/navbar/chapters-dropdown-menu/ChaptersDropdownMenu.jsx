import { useSurahList } from "../../../hooks/useSurahList";
import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList, NavbarItem } from 'keep-react'
import { FaAngleDown } from "react-icons/fa";

const ChaptersDropdownMenu = () => {

    const { state } = useSurahList();
    const { surahList, loading, error } = state;

    return (
        <Dropdown trigger="hover">
            <DropdownAction asChild>
                <NavbarItem className="flex items-center gap-1">
                    <p>Chapters</p>
                    <FaAngleDown></FaAngleDown>
                </NavbarItem>
            </DropdownAction>
            <DropdownContent>
                <DropdownList>
                    <DropdownItem>Contacts</DropdownItem>
                    <DropdownItem>Phone</DropdownItem>
                    <DropdownItem>Statistics</DropdownItem>
                    <Divider />
                    <DropdownItem>Rename</DropdownItem>
                    <DropdownItem>Duplicate</DropdownItem>
                    <Divider />
                    <DropdownItem>Account</DropdownItem>
                    <DropdownItem>Logout</DropdownItem>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default ChaptersDropdownMenu;