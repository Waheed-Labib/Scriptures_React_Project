/* eslint-disable react/prop-types */
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahList } from "../../../../../../hooks/useSurahList";
import ChapterDropdownItem from "../chapters-dropdown-menu/ChapterDropdownItem";

const ChaptersList = () => {

    const { state } = useSurahList();
    const { surahList, loading, error } = state;

    return (
        <div className="h-full overflow-y-scroll">
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
                ></ChapterDropdownItem>)
            }
            {
                error && <ErrorComponent errorType='Chapter List Fetching Failed' errorText={error}></ErrorComponent>
            }
        </div>
    );
};

export default ChaptersList;