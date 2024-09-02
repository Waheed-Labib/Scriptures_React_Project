import { useVersesInfo } from "../../../hooks/useVersesInfo";
import VerseComponent from "./verse-component/VerseComponent";

/* eslint-disable react/prop-types */
const SurahContent = () => {

    const { state } = useVersesInfo();
    const { versesInfo } = state;
    const { verses: versesData } = versesInfo;

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