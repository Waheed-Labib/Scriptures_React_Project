import { useSurahList } from "../../../hooks/useSurahList";
import { Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList, NavbarItem } from 'keep-react'
import { FaAngleDown } from "react-icons/fa";
import ChapterDropdownItem from "./ChapterDropdownItem";

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
                <DropdownList className="">

                    <DropdownItem className="p-0">
                        <input placeholder="Search" className="w-full h-10 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4"></input>
                    </DropdownItem>

                    <div className="h-[60vh] overflow-y-scroll">
                        {
                            surahList?.map(surah => <ChapterDropdownItem
                                key={surah?.id}
                                surah={surah}
                                loading={loading}
                                error={error}
                            ></ChapterDropdownItem>)
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default ChaptersDropdownMenu;