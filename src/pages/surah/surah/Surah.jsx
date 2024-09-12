import { useState } from "react";
import { useScroll } from "../../../hooks/useScroll";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import SurahContent from "../surah-content/SurahContent";
import { useSurahId } from "../../../hooks/useSurahId";

const Surah = () => {

    useScroll();

    const [arabicFont, setArabicFont] = useState(localStorage.getItem('aqtp-font') || 'uthmani');
    const [chapterNum, setChapterNum] = useState(useSurahId())

    return (
        <div className="flex gap-8">
            <div className="w-1/5">
                <LeftSideBar
                    arabicFont={arabicFont}
                    setArabicFont={setArabicFont}
                    chapterNum={chapterNum}
                    setChapterNum={setChapterNum}
                ></LeftSideBar>
            </div>

            <div className="w-4/5">
                <SurahContent
                    arabicFont={arabicFont}
                    setArabicFont={setArabicFont}
                ></SurahContent>
            </div>

        </div>
    );
};

export default Surah;