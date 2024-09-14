import { useEffect, useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import { useSurahId } from "../../../hooks/useSurahId";
import SurahContent from "../surah-content/surah-content/SurahContent";

const Surah = () => {

    useScrollToTop();

    const [arabicFont, setArabicFont] = useState(localStorage.getItem('aqtp-font') || 'uthmani');
    const [chapterNum, setChapterNum] = useState(useSurahId())

    const [page, setPage] = useState(1)

    useEffect(() => {
        setPage(1)
    }, [chapterNum])

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
                    page={page}
                    setPage={setPage}
                    arabicFont={arabicFont}
                    setArabicFont={setArabicFont}
                ></SurahContent>
            </div>

        </div>
    );
};

export default Surah;