/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";
import { useNavigate } from "react-router-dom";

const ChapterDropdownItem = ({ surah }) => {

    const surahId = surah?.id;

    const navigate = useNavigate();

    const navigateToSurahPage = () => {
        navigate(`/surah/${surahId}/page/1`)
    }

    return (
        <div onClick={navigateToSurahPage}>
            <DropdownItem className="">
                <p>{surahId}</p>
                <p>{surah?.name_simple}</p>
            </DropdownItem>
        </div>

    );
};

export default ChapterDropdownItem;