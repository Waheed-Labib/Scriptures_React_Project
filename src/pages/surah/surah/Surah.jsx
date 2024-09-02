import { useScroll } from "../../../hooks/useScroll";
import LeftSideBar from "../left-side-bar/left-side-bar/LeftSideBar";
import SurahContent from "../surah-content/SurahContent";

const Surah = () => {

    useScroll();

    return (
        <div className="flex gap-8">
            <div className="w-1/5">
                <LeftSideBar></LeftSideBar>
            </div>

            <div className="w-4/5">
                <SurahContent></SurahContent>
            </div>

        </div>
    );
};

export default Surah;