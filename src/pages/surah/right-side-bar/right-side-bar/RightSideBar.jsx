import SurahListSideBar from "../surah-list-side-bar/surah-list-side-bar/SurahListSideBar";

const RightSideBar = () => {

    return (
        <div className="h-[85vh] overflow-scroll overflow-x-hidden">
            <div className="pr-2">
                <SurahListSideBar></SurahListSideBar>
            </div>
        </div>
    );
};

export default RightSideBar;