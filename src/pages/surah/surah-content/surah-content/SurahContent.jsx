/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import SurahStarting from "../surah-starting/SurahStarting";
import VerseComponent from "../verse-component/verse-component/VerseComponent";


const SurahContent = ({ arabicFont, page }) => {

    const scrollComponentRef = useRef(null);

    const scrollComponent = () => {
        scrollComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {
        scrollComponent()
    }, [page])

    const { state } = useVersesInfo(page);
    const { versesInfo, loading, error } = state;
    const { verses: versesData } = versesInfo;

    return (
        <div className="">
            <div ref={scrollComponentRef}>
                <SurahStarting></SurahStarting>
                <div className="rounded px-8 bg-slate-100">
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

                </div>
            </div>
        </div>

    )
};

export default SurahContent;