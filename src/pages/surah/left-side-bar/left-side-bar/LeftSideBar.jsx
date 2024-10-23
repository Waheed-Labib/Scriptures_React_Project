/* eslint-disable react/prop-types */
import SelectChapter from "../select-chapter/SelectChapter";
import { SelectFont } from "../select-font/SelectFont";
import SelectTranslation from "../select-translation/SelectTranslation";
import SuraInfo from "../sura-info/SuraInfo";

const LeftSideBar = ({ arabicFont, setArabicFont, chapterNum, setChapterNum, setPage }) => {

    return (
        <div className="flex flex-col gap-4 mt-2">
            <SuraInfo
                chapterNum={chapterNum}
                setChapterNum={setChapterNum}
                setPage={setPage}
            ></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
            <SelectTranslation></SelectTranslation>
            <SelectChapter
                setChapterNum={setChapterNum}
                setPage={setPage}
            ></SelectChapter>
        </div>
    );
};

export default LeftSideBar;