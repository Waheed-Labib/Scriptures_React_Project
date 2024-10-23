/* eslint-disable react/prop-types */
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useVersesInfo } from "../../../../../hooks/useVersesInfo";
import { useNavigate } from "react-router-dom";
import { useSurahId } from "../../../../../hooks/useSurahId";

const VersesPageNavigation = ({ page, setPage }) => {

    const { state } = useVersesInfo(page);
    const { versesInfo } = state;

    // const currentPage = versesInfo?.pagination?.current_page;
    // const nextPage = versesInfo?.pagination?.next_page;
    // const perPage = versesInfo?.pagination?.per_page;
    const totalPages = versesInfo?.pagination?.total_pages;

    // const totalVerses = versesInfo?.pagination?.total_records;

    const navigate = useNavigate();
    const surahId = useSurahId();

    const handlePrevPageClick = () => {
        navigate(`/surah/${surahId}/page/${page - 1}`);
        setPage(page - 1)
    }

    const handleNextPageClick = () => {
        navigate(`/surah/${surahId}/page/${page + 1}`);
        setPage(page + 1)
    }

    return (
        <div className="flex items-center gap-4 text-slate-600">

            {
                page !== 1 &&
                <div onClick={handlePrevPageClick} className="text-2xl text-slate-500 hover:text-slate-600">
                    <FaChevronCircleLeft></FaChevronCircleLeft>
                </div>
            }

            <p className="text-xs font-medium">Page {page}</p>

            {
                page !== totalPages &&
                <div onClick={handleNextPageClick} className="text-2xl text-slate-500  hover:text-slate-600">
                    <FaChevronCircleRight></FaChevronCircleRight>
                </div>
            }


        </div >
    );
};

export default VersesPageNavigation;