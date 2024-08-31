import SurahListSideBar from "../surah-list-side-bar/surah-list-side-bar/SurahListSideBar";
import { useSurah } from "../../../../hooks/useSurah";


const LeftSideBar = () => {

    const { surahList, loading, error } = useSurah();

    return (
        <div className="">
            <SurahListSideBar
                surahList={surahList}
                loading={loading}
                error={error}
            ></SurahListSideBar>
        </div>
    );
};

export default LeftSideBar;