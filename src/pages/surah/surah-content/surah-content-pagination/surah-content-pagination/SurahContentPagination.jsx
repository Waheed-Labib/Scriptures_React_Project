import GoToOtherPage from "../go-to-other-page/GoToOtherPage";
import VersesPageNavigation from "../verses-page-navigation/VersesPageNavigation";
import VersesPerPage from "../verses-per-page/VersesPerPage";

const SurahContentPagination = () => {
    return (
        <div className="flex items-center justify-between">
            <VersesPerPage></VersesPerPage>
            <VersesPageNavigation></VersesPageNavigation>
            <GoToOtherPage></GoToOtherPage>
        </div>
    );
};

export default SurahContentPagination;