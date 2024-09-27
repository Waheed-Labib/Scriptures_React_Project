/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahList } from "../../../../../../hooks/useSurahList";
import ChapterDropdownItem from "../chapters-dropdown-menu/ChapterDropdownItem";
import { Button } from "keep-react";
import { searchChapterWithNewSearchText } from "../../../../../../utilities/search-methods/searchChapterWithNewSearchText";

const ChapterSearchOutput = ({ searchText, setSearchText, setChapterNum }) => {

    const { state } = useSurahList();
    const { surahList, loading: surahListLoading, error: surahListError } = state;

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {

        searchChapterWithNewSearchText(setSearchResult, surahList, searchText)

    }, [searchText, surahList])

    return (
        <div className="h-full overflow-y-scroll">
            <Button onClick={() => setSearchText('')} size="xs" className="w-full my-1 bg-transparent text-red-800 border border-red-800 hover:text-red-700 hover:border-red-700 hover:bg-transparent">
                Cancel Search
            </Button>
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