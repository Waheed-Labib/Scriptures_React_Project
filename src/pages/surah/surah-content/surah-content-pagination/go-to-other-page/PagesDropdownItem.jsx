import { DropdownItem } from "keep-react";
import { useNavigate, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
const PagesDropdownItem = ({ pageItem, perPage, setPage }) => {

    const firstVerseNumber = ((pageItem - 1) * perPage) + 1;
    const lastVerseNumber = pageItem * perPage;

    const verses = `verse (${firstVerseNumber}-${lastVerseNumber})`

    const navigate = useNavigate();
    const { surahId } = useParams();

    const handlePageChange = () => {
        navigate(`/surah/${surahId}/page/${pageItem}`)
        setPage(pageItem)
    }

    return (
        <div onClick={handlePageChange}>
            <DropdownItem>{verses}</DropdownItem>
        </div>
    );
};

export default PagesDropdownItem;