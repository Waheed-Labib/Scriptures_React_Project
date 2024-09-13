/* eslint-disable react/prop-types */
import ErrorComponent from "../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../components/simple-skeleton/SimpleSkeleton";
import { useVersesInfo } from "../../../hooks/useVersesInfo";
// import SurahStarting from "./surah-starting/SurahStarting";
import VerseComponent from "./verse-component/VerseComponent";


const SurahContent = ({ arabicFont }) => {

    const { state } = useVersesInfo();
    const { versesInfo, loading, error } = state;
    const { verses: versesData } = versesInfo;

    return (
        <div>
            {/* <SurahStarting></SurahStarting> */}
            {
                loading && <div className="flex flex-col gap-2">
                    {
                        Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>
            }
            {
                error && <ErrorComponent
                    errorType={'Verses Fetching Failed'}
                    errorText={error}
                ></ErrorComponent>
            }
            {
                !loading && !error && <>
                    {
                        versesData?.map((verseData, index) => <VerseComponent
                            key={index}
                            verseData={verseData}
                            arabicFont={arabicFont}
                        ></VerseComponent>)
                    }
                </>
            }
        </div>
    )
};

export default SurahContent;