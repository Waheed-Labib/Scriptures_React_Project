/* eslint-disable react/prop-types */
import { SelectFont } from "../select-font/SelectFont";
import SelectTranslation from "../select-translation/SelectTranslation";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ arabicFont, setArabicFont, chapterChange, setChapterChange }) => {

    return (
        <div className="">
            <SuraInfo
                chapterChange={chapterChange}
                setChapterChange={setChapterChange}
            ></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
            <SelectTranslation></SelectTranslation>
        </div>
    );
};

export default LeftSideBar;