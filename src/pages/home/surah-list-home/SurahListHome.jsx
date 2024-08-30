
import ErrorComponent from "../../../components/error-component/ErrorComponent";
import { SurahSkeletonBig } from "./surah_skeleton_big/SurahSkeletonBig";
import SurahLinkDetailed from "./SurahLinkDetailed";

// eslint-disable-next-line react/prop-types
const SurahListHome = ({ surahList, loading, error }) => {

    return (
        <div>
            <h1 className="text-2xl font-semibold text-gray-600 mb-4">List of the Chapters</h1>

            {
                loading &&
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        Array.from({ length: 114 }).map((_, index) => <SurahSkeletonBig key={index}></SurahSkeletonBig>)
                    }
                </div>
            }

            {
                // eslint-disable-next-line react/prop-types
                surahList.length > 0 &&
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        // eslint-disable-next-line react/prop-types
                        surahList.map((surah, index) => <SurahLinkDetailed key={index} surah={surah}></SurahLinkDetailed>)
                    }
                </div>
            }

            {
                error &&
                <div className="flex justify-center mt-4">
                    <ErrorComponent errorType='Fetching Failed' errorText={error}></ErrorComponent>
                </div>
            }
        </div>
    );
};

export default SurahListHome;