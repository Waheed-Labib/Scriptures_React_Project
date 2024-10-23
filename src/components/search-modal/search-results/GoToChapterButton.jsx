/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const GoToChapterButton = ({ verseKey, setIsSearchModalOpen }) => {

    const navigate = useNavigate();

    const handleGoToChapter = () => {
        const splittedVerseKey = verseKey.split(':');
        const surahNumber = splittedVerseKey[0];
        const pageNumber = Math.ceil((parseInt(splittedVerseKey[1])) / 10);
        navigate(`/surah/${surahNumber}/page/${pageNumber}}`)
        setIsSearchModalOpen(false)
        window.location.reload()
    }

    return (
        <button onClick={handleGoToChapter} className="bg-gray-300 h-8 px-2 rounded-md text-cyan-900 mt-2 w-48 hover:bg-gray-200 hover:font-medium">Go to Chapter</button>
    );
};

export default GoToChapterButton;