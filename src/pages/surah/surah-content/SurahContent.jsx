import SimpleSkeleton from "../../../components/simple-skeleton/SimpleSkeleton";
import { useVersesInfo } from "../../../hooks/useVersesInfo";
import VerseComponent from "./verse-component/VerseComponent";


const SurahContent = () => {

    const { state } = useVersesInfo();
    const { versesInfo, loading } = state;
    const { verses: versesData } = versesInfo;

    if (loading) return (
        <div className="flex flex-col gap-2">
            {
                Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
            }
        </div>

    )

    console.log(loading, versesData)

    return (
        <div className="">
            {
                versesData?.map((verseData, index) => <VerseComponent
                    key={index}
                    verseData={verseData}
                ></VerseComponent>)
            }
        </div>
    );
};

export default SurahContent;