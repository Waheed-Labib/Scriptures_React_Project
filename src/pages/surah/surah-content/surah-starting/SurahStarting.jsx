import { useParams } from "react-router-dom";
import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahInfo } from "../../../../hooks/useSurahInfo";
import SelectTranslation from "../../left-side-bar/select-translation/SelectTranslation";

const SurahStarting = () => {

    const { surahId } = useParams();
    const { loading, surahInfo, error } = useSurahInfo(surahId);

    if (loading) return (
        <div className="w-full flex flex-col gap-4 justify-center items-center mb-8">
            <div className="w-28">
                <SimpleSkeleton></SimpleSkeleton>
            </div>
            <div className="w-48">
                <SimpleSkeleton></SimpleSkeleton>
            </div>
        </div>
    )

    if (error) return <ErrorComponent errorType='Surah Name Fetching Failed' errorText={error}></ErrorComponent>

    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-slate-100 rounded px-8 pt-4">

            <div className="my-8">
                {
                    surahInfo?.bismillah_pre && <div className="text-center mb-4">
                        <p className="text-2xl mb-4 font-bold text-cyan-950">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
                        <p className="text-sm">In the Name of Allah—the Most Compassionate, Most Merciful.</p>
                    </div>
                }

                {/* <p className="text-xs font-medium text-center text-cyan-800 italic mt-4">
                    You can select your favourite translation books
                    <span className="hidden lg:inline">&nbsp;(Visit the sidebar)</span>
                    <span className="inline lg:hidden">&nbsp;(From the bottom of this page)</span>
                </p> */}

                <div>
                    <SelectTranslation inline={true}></SelectTranslation>
                </div>
            </div>

        </div>
    );
};

export default SurahStarting;