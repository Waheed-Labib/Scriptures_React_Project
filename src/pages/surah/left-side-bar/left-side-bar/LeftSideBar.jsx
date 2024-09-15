/* eslint-disable react/prop-types */
import { SelectFont } from "../select-font/SelectFont";
import SelectTranslation from "../select-translation/SelectTranslation";
import SuraInfo from "../sura-info/SuraInfo";
import SurahPageSearchBox from "../surah-page-search-box/SurahPageSearchBox";

const LeftSideBar = ({ arabicFont, setArabicFont, chapterNum, setChapterNum }) => {

    return (
        <div className="flex flex-col gap-4">
            <SuraInfo
                chapterNum={chapterNum}
                setChapterNum={setChapterNum}
            ></SuraInfo>
            <SelectFont
                arabicFont={arabicFont}
                setArabicFont={setArabicFont}
            ></SelectFont>
            <SelectTranslation></SelectTranslation>
            <SurahPageSearchBox></SurahPageSearchBox>
        </div>
    );
};

export default LeftSideBar;