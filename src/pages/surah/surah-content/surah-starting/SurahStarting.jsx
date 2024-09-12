import ErrorComponent from "../../../../components/error-component/ErrorComponent";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useSurahId } from "../../../../hooks/useSurahId";
import { useSurahInfo } from "../../../../hooks/useSurahInfo";

const SurahStarting = () => {

    const surahId = useSurahId();
    const { loading, surahInfo, error } = useSurahInfo(surahId);

    if (loading) return (
        <div>
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
        <div className="flex flex-col gap-2 items-center justify-center">
            <div className="rounded-full w-48 h-48 bg-slate-600 flex items-center justify-center">
                <div className="w-44 h-44 border-2 border-dotted rounded-full border-cyan-100 flex items-center justify-center">
                    <p className="text-5xl font-extrabold text-cyan-100">{surahInfo?.name_arabic}</p>
                </div>
            </div>

            {
                surahInfo?.bismillah_pre && <p className="mt-2 text-2xl font-bold text-cyan-700">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
            }
        </div>
    );
};

export default SurahStarting;