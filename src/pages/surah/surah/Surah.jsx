import { useScroll } from "../../../hooks/useScroll";
import { useSurahId } from "../../../hooks/useSurahId";
import { useVerses } from "../../../hooks/useVerses";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import RightSideBar from "../right-side-bar/right-side-bar/RightSideBar";
import SurahContent from "../surah-content/SurahContent";

const Surah = () => {

    useScroll();

    const surahId = useSurahId();
    const { verses, loading, error } = useVerses();

    return (
        <div className="flex">
            <div className="w-1/5">
                <LeftSideBar surahId={surahId}></LeftSideBar>
            </div>

            <div className="w-3/5">
                <SurahContent
                    surahId={surahId}
                    verses={verses}
                    loading={loading}
                    error={error}
                ></SurahContent>
            </div>

            <div className="w-1/5">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Surah;