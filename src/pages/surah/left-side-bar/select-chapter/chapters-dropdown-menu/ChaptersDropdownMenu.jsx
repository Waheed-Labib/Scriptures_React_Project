/* eslint-disable react/prop-types */
import { useSurahList } from "../../../../../hooks/useSurahList";
import { Button, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from 'keep-react'
import './ChapterDropdownItem'
import ChapterDropdownItem from "./ChapterDropdownItem";
import { useSurahId } from "../../../../../hooks/useSurahId";
import { useSurahInfo } from "../../../../../hooks/useSurahInfo";
import SimpleSkeleton from "../../../../../components/simple-skeleton/SimpleSkeleton";
import ErrorComponent from "../../../../../components/error-component/ErrorComponent";
import { FaBars } from "react-icons/fa";

const ChaptersDropdownMenu = ({ setChapterNum }) => {

    const { state } = useSurahList();
    const { surahList, loading, error } = state;

    const surahId = useSurahId();
    const { loading: surahInfoLoading, surahInfo, error: surahInfoError } = useSurahInfo(surahId);
    const { id, name_simple } = surahInfo;

    return (
        <Dropdown trigger="hover">
            <DropdownAction asChild>
                <Button className='text-cyan-700 text-xs justify-between w-full bg-slate-100 hover:bg-slate-200 rounded h-8'>
                    <p className=''>
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
                    <div className=''>
                        <FaBars></FaBars>
                    </div>
                </Button>

            </DropdownAction>
            <DropdownContent>
                <DropdownList className="">

                    <DropdownItem className="p-0 mb-2">
                        <input placeholder="Search" className="w-full h-8 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4"></input>
                    </DropdownItem>

                    <div className="h-72 overflow-y-scroll">
                        {
                            loading && <div className="flex flex-col gap-2">
                                {
                                    Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                                }
                            </div>
                        }
                        {
                            surahList?.map(surah => <ChapterDropdownItem
                                key={surah?.id}
                                surah={surah}
                                setChapterNum={setChapterNum}
                            ></ChapterDropdownItem>)
                        }
                        {
                            error && <ErrorComponent errorType='Chapter List Fetching Failed' errorText={error}></ErrorComponent>
                        }
                    </div>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default ChaptersDropdownMenu;