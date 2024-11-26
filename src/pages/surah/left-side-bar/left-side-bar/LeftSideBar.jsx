/* eslint-disable react/prop-types */
import SelectChapter from "../select-chapter/SelectChapter";
import { SelectFont } from "../select-font/SelectFont";
import SelectTranslation from "../select-translation/SelectTranslation";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ arabicFont, setArabicFont, chapterNum }) => {

    return (
        <div className="flex flex-col gap-4 mt-2">
            <SuraInfo
                chapterNum={chapterNum}
            ></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
            <SelectTranslation></SelectTranslation>
            <SelectChapter></SelectChapter>
        </div>
    );
};

export default LeftSideBar;