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
        <div className="flex flex-col gap-2 items-center justify-center bg-slate-100 rounded px-8 pt-4">

            {
                surahInfo?.bismillah_pre && <div className="my-8 text-center">
                    <p className="text-2xl mb-4 font-bold text-cyan-950">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
                    <p className="text-sm">In the Name of Allah—the Most Compassionate, Most Merciful.</p>
                </div>
            }
        </div>
    );
};

export default SurahStarting;