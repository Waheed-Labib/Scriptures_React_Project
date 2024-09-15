import { useEffect, useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import { useSurahId } from "../../../hooks/useSurahId";
import SurahContent from "../surah-content/surah-content/SurahContent";
import SurahContentPagination from "../surah-content/surah-content-pagination/surah-content-pagination/SurahContentPagination";

const Surah = () => {

    useScrollToTop();

    const [arabicFont, setArabicFont] = useState(localStorage.getItem('aqtp-font') || 'uthmani');
    const [chapterNum, setChapterNum] = useState(useSurahId())

    const [page, setPage] = useState(1)

    useEffect(() => {
        setPage(1)
    }, [chapterNum])

    return (
        <div className="flex gap-8 h-[86vh]">
            <div className="w-1/5 h-full pt-4">
                <LeftSideBar
                    arabicFont={arabicFont}
                    setArabicFont={setArabicFont}
                    chapterNum={chapterNum}
                    setChapterNum={setChapterNum}
                ></LeftSideBar>
            </div>

            <div className="rounded-sm h-full p-1 pb-0 w-4/5 bg-slate-50">
                <div className="w-full h-full flex flex-col">
                    <div className="w-full overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-50">
                        <SurahContent
                            page={page}
                            setPage={setPage}
                            arabicFont={arabicFont}
                            setArabicFont={setArabicFont}
                        ></SurahContent>

                    </div>

                    <div className="border rounded-sm border-slate-200 border-dotted pt-1">
                        <SurahContentPagination
                            page={page}
                            setPage={setPage}
                        ></SurahContentPagination>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Surah;