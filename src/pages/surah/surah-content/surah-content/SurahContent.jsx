/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import SurahContentPagination from "../surah-content-pagination/surah-content-pagination/SurahContentPagination";
import SurahStarting from "../surah-starting/SurahStarting";
import VerseComponent from "../verse-component/verse-component/VerseComponent";


const SurahContent = ({ arabicFont }) => {

    const scrollComponentRef = useRef(null);

    const scrollComponent = () => {
        scrollComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const [page, setPage] = useState(1)

    useEffect(() => {
        if (page) scrollComponent()
    }, [page])

    const { state } = useVersesInfo(page);
    const { versesInfo, loading, error } = state;
    const { verses: versesData } = versesInfo;

    return (
        <div className="p-2 bg-slate-100">
            <div className="h-[80vh] overflow-y-scroll">
                <div ref={scrollComponentRef}>
                    <SurahStarting></SurahStarting>
                    <div className="border rounded p-8 pt-0 bg-slate-200">
                        {
                            loading && <div className="flex flex-col gap-2">
                                {
                                    Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                                }
                            </div>
                        }
                        {
                            error && <ErrorComponent
                                errorType={'Verses Fetching Failed'}
                                errorText={error}
                            ></ErrorComponent>
                        }
                        {
                            !loading && !error && <>
                                {
                                    versesData?.map((verseData, index) => <VerseComponent
                                        key={index}
                                        page={page}
                                        verseData={verseData}
                                        arabicFont={arabicFont}
                                    ></VerseComponent>)
                                }
                            </>
                        }

                        <SurahContentPagination
                            page={page}
                            setPage={setPage}
                        ></SurahContentPagination>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SurahContent;