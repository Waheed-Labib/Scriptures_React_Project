/* eslint-disable react/prop-types */
import { useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import SurahContent from "../surah-content/surah-content/SurahContent";
import SurahContentPagination from "../surah-content/surah-content-pagination/surah-content-pagination/SurahContentPagination";
import { useSurahId } from "../../../hooks/useSurahId";
import { usePageNumber } from "../../../hooks/usePageNumber";
import { Helmet } from "react-helmet";
import { useSurahInfo } from "../../../hooks/useSurahInfo";

const Surah = () => {

    useScrollToTop();

    const [arabicFont, setArabicFont] = useState(localStorage.getItem('aqtp-font') || 'uthmani');

    const [chapterNum, setChapterNum] = useState(useSurahId())
    const [page, setPage] = useState(usePageNumber())

    const { surahInfo } = useSurahInfo(chapterNum);
    const { name_arabic, name_simple } = surahInfo;

    return (
        <div className="flex gap-8 mt-2 h-[87vh]">

            <Helmet>
                <title>{`${chapterNum}. ${name_simple} - ${name_arabic} ~ Translate Quran`}</title>

                <meta name="description" content={`Chapter ${name_simple} with translation`} />

                <meta name="keyword" content={`${name_arabic}, ${name_simple}, surah ${name_simple}, chapter ${name_simple}, ${name_simple} translation`} />
            </Helmet>

            <div className="w-1/5 pt-4 h-full">
                <LeftSideBar
                    arabicFont={arabicFont}
                    setArabicFont={setArabicFont}
                    chapterNum={chapterNum}
                    setChapterNum={setChapterNum}
                    setPage={setPage}
                ></LeftSideBar>
            </div>

            <div className="rounded-sm p-1 pb-0 w-4/5 h-full bg-slate-50">
                <div className="w-full h-full flex  flex-col">
                    <div className="w-full h-full overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-50">
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