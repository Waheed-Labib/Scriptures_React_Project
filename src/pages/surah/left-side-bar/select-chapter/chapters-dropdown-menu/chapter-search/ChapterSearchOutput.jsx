/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahList } from "../../../../../../hooks/useSurahList";
import ChapterDropdownItem from "../chapters-dropdown-menu/ChapterDropdownItem";

const ChapterSearchOutput = ({ searchText, setChapterNum }) => {

    const { state } = useSurahList();
    const { surahList, loading: surahListLoading, error: surahListError } = state;

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([])

        surahList?.map(surah => {

            if (parseInt(surah.id) === parseInt(searchText)) return setSearchResult(prevResult => [...prevResult, surah]);

            if (surah.name_simple.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, surah]);

            if (surah.name_arabic.includes(searchText)) return setSearchResult(prevResult => [...prevResult, surah]);
        })

    }, [searchText, surahList])

    return (
        <div className="h-72 overflow-y-scroll">
            {
                surahListLoading && <div className="flex flex-col gap-2">
                    {
                        Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>
            }
            {
                searchResult?.map(surah => <ChapterDropdownItem
                    key={surah?.id}
                    surah={surah}
                    setChapterNum={setChapterNum}
                ></ChapterDropdownItem>)
            }
            {
                surahListError && <ErrorComponent errorType='Search Result Fetching Failed' errorText={surahListError}></ErrorComponent>
            }
        </div>
    );
};

export default ChapterSearchOutput;