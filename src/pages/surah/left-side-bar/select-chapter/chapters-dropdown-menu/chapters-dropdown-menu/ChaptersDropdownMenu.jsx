/* eslint-disable react/prop-types */
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import './ChapterDropdownItem'
import { useState } from "react";
import ChaptersList from "../chapters-list/ChaptersList";
import ChaptersDropdownButtonText from '../chapters-dropdown-button/ChaptersDropdownButtonText';
import ChapterSearchInput from '../chapter-search/ChapterSearchInput';
import ChapterSearchOutput from '../chapter-search/ChapterSearchOutput';

const ChaptersDropdownMenu = ({ setChapterNum }) => {

    const [searchText, setSearchText] = useState('');

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button className='text-cyan-700 text-xs justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <ChaptersDropdownButtonText></ChaptersDropdownButtonText>
                </Button>
            </DropdownAction>
            <DropdownContent>
                <DropdownList className="">

                    <DropdownItem className="p-0 mb-2">
                        <ChapterSearchInput
                            searchText={searchText}
                            setSearchText={setSearchText}
                        ></ChapterSearchInput>
                    </DropdownItem>

                    {
                        searchText ?
                            <ChapterSearchOutput
                                searchText={searchText}
                                setSearchText={setSearchText}
                                setChapterNum={setChapterNum}
                            ></ChapterSearchOutput>
                            :
                            <ChaptersList setChapterNum={setChapterNum}></ChaptersList>
                    }

                </DropdownList>
            </DropdownContent>
        </Dropdown >
    )
}

export default ChaptersDropdownMenu;