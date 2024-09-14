/* eslint-disable react/prop-types */
import GoToAnotherChapter from "../go-to-another-chapter/GoToAnotherChapter";
import { SelectFont } from "../select-font/SelectFont";
import SelectTranslation from "../select-translation/SelectTranslation";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ arabicFont, setArabicFont, chapterNum, setChapterNum }) => {

    return (
        <div className="">
            <SuraInfo
                chapterNum={chapterNum}
                setChapterNum={setChapterNum}
            ></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
            <SelectTranslation></SelectTranslation>
            <GoToAnotherChapter></GoToAnotherChapter>
        </div>
    );
};

export default LeftSideBar;