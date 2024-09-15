/* eslint-disable react/prop-types */
import GoToOtherPage from "../go-to-other-page/GoToOtherPage";
import VersesPageNavigation from "../verses-page-navigation/VersesPageNavigation";
import VersesPerPage from "../verses-per-page/VersesPerPage";

const SurahContentPagination = ({ page, setPage }) => {
    return (
        <div className="flex items-center justify-between px-4">
            <VersesPerPage></VersesPerPage>

            <VersesPageNavigation
                page={page}
                setPage={setPage}
            ></VersesPageNavigation>

            <GoToOtherPage
                page={page}
                setPage={setPage}
            ></GoToOtherPage>
        </div>
    );
};

export default SurahContentPagination;