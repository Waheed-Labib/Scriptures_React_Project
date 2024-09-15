/* eslint-disable react/prop-types */
import { useSurahList } from "../../../../../hooks/useSurahList";
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import './ChapterDropdownItem'
import ChapterDropdownItem from "./ChapterDropdownItem";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSurahId } from "../../../../../hooks/useSurahId";
import { useSurahInfo } from "../../../../../hooks/useSurahInfo";

const ChaptersDropdownMenu = ({ setChapterNum }) => {

    const { state } = useSurahList();
    const { surahList, loading, error } = state;

    const surahId = useSurahId();
    const { loading: surahInfoLoading, surahInfo, error: surahInfoError } = useSurahInfo(surahId);
    const { id, name_simple } = surahInfo;

    return (
        <Dropdown trigger="hover">
            <DropdownAction asChild>
                <Button className='justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <p className='text-xs text-cyan-700'>
                        {
                            surahInfoLoading && '...'
                        }
                        {
                            surahInfoError && '!'
                        }
                        {
                            surahInfo && `${id}. ${name_simple}`
                        }
                    </p>
                    <div className='text-3xl text-cyan-700'>
                        <RiArrowDropDownLine></RiArrowDropDownLine>
                    </div>
                </Button>

            </DropdownAction>
            <DropdownContent>
                <DropdownList className="">

                    <DropdownItem className="p-0 mb-2">
                        <input placeholder="Search" className="w-full h-8 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4"></input>
                    </DropdownItem>

                    <div className="h-[60vh] overflow-y-scroll">
                        {
                            surahList?.map(surah => <ChapterDropdownItem
                                key={surah?.id}
                                surah={surah}
                                loading={loading}
                                error={error}
                                setChapterNum={setChapterNum}
                            ></ChapterDropdownItem>)
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default ChaptersDropdownMenu;