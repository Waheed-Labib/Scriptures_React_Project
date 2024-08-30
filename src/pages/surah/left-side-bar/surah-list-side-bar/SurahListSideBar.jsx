
import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import { SurahSkeletonSmall } from "./surah_skeleton_small/SurahSkeletonBig";
import SurahLinkSmall from "./SurahLinkSmall";

// eslint-disable-next-line react/prop-types
const SurahListSideBar = ({ surahList, loading, error }) => {

    return (
        <div className="h-[80vh] overflow-scroll overflow-x-hidden">
            <h1 className="text-lg font-semibold text-gray-600 mb-4">List of the Chapters</h1>

            {
                loading &&
                <div className="grid grid-cols-1 gap-4">
                    {
                        Array.from({ length: 114 }).map((_, index) => <SurahSkeletonSmall key={index}></SurahSkeletonSmall>)
                    }
                </div>
            }

            {
                // eslint-disable-next-line react/prop-types
                surahList.length > 0 &&
                <div className="grid grid-cols-1 gap-4">
                    {
                        // eslint-disable-next-line react/prop-types
                        surahList.map((surah, index) => <SurahLinkSmall key={index} surah={surah}></SurahLinkSmall>)
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

export default SurahListSideBar;