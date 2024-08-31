import SurahListSideBar from "../surah-list-side-bar/surah-list-side-bar/SurahListSideBar";
import { useSurah } from "../../../../hooks/useSurah";


const RightSideBar = () => {

    const { surahList, loading, error } = useSurah();

    return (
        <div className="h-[85vh] overflow-scroll overflow-x-hidden">
            <SurahListSideBar
                surahList={surahList}
                loading={loading}
                error={error}
            ></SurahListSideBar>
        </div>
    );
};

export default RightSideBar;