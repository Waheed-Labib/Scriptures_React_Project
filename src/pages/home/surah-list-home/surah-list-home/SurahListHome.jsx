import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import { useSurahList } from "../../../../hooks/useSurahList";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import SurahLinkDetailed from "../surah-link-detailed/SurahLinkDetailed";


const SurahListHome = () => {

    const { state } = useSurahList();
    const { surahList, loading, error } = state;

    return (
        <div className="mt-16">

            <h1 className="text-5xl text-center font-bold text-gray-400 mb-12">Chapters</h1>

            {
                loading &&
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        Array.from({ length: 114 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>
            }

            {

                surahList.length > 0 &&
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        surahList.map((surah, index) => <SurahLinkDetailed key={index} surah={surah}></SurahLinkDetailed>)
                    }
                </div>
            }

            {
                error &&
                <div className="flex justify-center mt-4">
                    <ErrorComponent errorType='Chapters Fetching Failed' errorText={error}></ErrorComponent>
                </div>
            }
        </div>
    );
};

export default SurahListHome;