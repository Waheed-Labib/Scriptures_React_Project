/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";
import { useNavigate } from "react-router-dom";

const ChapterDropdownItem = ({ surah, setChapterNum }) => {

    const surahId = surah?.id;

    const navigate = useNavigate();

    const navigateToSurahPage = () => {
        navigate(`/surah/${surahId}`)
        setChapterNum(surahId)
    }

    return (
        <div onClick={navigateToSurahPage}>
            <DropdownItem className="flex items-center gap-2">
                <p>{surahId}</p>
                <p>{surah?.name_simple}</p>
            </DropdownItem>
        </div>

    );
};

export default ChapterDropdownItem;