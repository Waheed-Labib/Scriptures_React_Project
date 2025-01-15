/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import SurahContent from "../surah-content/surah-content/SurahContent";
import SurahContentPagination from "../surah-content/surah-content-pagination/surah-content-pagination/SurahContentPagination";
import { Helmet } from "react-helmet";
import { useSurahInfo } from "../../../hooks/useSurahInfo";
import SmallerDevicesHeading from "../smaller-devices-heading/SmallerDevicesHeading";
import { useParams } from "react-router-dom";

const Surah = () => {

    useScrollToTop();

    const [arabicFont, setArabicFont] = useState(localStorage.getItem('aqtp-font') || 'uthmani');

    const { surahId, pageNum } = useParams();

    const [chapterNum, setChapterNum] = useState(surahId)
    const [page, setPage] = useState(pageNum)

    const { surahInfo } = useSurahInfo(chapterNum);
    const { name_arabic, name_simple } = surahInfo;

    useEffect(() => {
        setChapterNum(parseInt(surahId))
        setPage(1)
    }, [surahId])

    return (
        <div>
            <Helmet>
                <title>{`${chapterNum}. ${name_simple} - ${name_arabic} ~ Translate Quran`}</title>

                <meta name="description" content={`Chapter ${name_simple} with translation`} />

                <meta name="keyword" content={`${name_arabic}, ${name_simple}, surah ${name_simple}, chapter ${name_simple}, ${name_simple} translation`} />
            </Helmet>

            <div className="lg:hidden">
                <SmallerDevicesHeading
                    chapterNum={chapterNum}
                ></SmallerDevicesHeading>
            </div>

            <div className="flex flex-col-reverse lg:flex-row gap-8 mt-2 lg:h-[87vh]">

                <div className="w-full lg:w-1/5 pt-4 h-full mb-8 lg:mb-0">
                    <LeftSideBar
                        arabicFont={arabicFont}
                        setArabicFont={setArabicFont}
                        chapterNum={chapterNum}
                    ></LeftSideBar>
                </div>

                <div className="rounded-sm p-1 pb-0 w-ful lg:w-4/5 h-full bg-slate-50">
                    <div className="w-full h-full flex  flex-col">
                        <div className="w-full h-full overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-track-slate-50">
                            <SurahContent
                                page={page}
                                setPage={setPage}
                                chapterNum={chapterNum}
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
        </div>
    );
};

export default Surah;