/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GoToChapterButton = ({ verseKey, setIsSearchModalOpen }) => {

    const [surahNumber, setSurahNumber] = useState(null);
    const [pageNumber, setPageNumber] = useState(null);

    useEffect(() => {
        const splittedVerseKey = verseKey.split(':');
        setSurahNumber(splittedVerseKey[0]);
        setPageNumber(Math.ceil((parseInt(splittedVerseKey[1])) / 10));
    }, [setPageNumber, setSurahNumber, verseKey])

    return (
        <Link to={`/surah/${surahNumber}/page/${pageNumber}`}>
            <button onClick={() => setIsSearchModalOpen(false)} className="bg-gray-300 h-8 px-2 rounded-md text-cyan-900 mt-2 w-48 hover:bg-gray-200 hover:font-medium">Go to Chapter</button>
        </Link>
    );
};

export default GoToChapterButton;