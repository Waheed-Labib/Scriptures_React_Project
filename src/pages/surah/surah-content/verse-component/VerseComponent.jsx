import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import { useArabicVerse } from "../../../../hooks/useArabicVerse";

/* eslint-disable react/prop-types */
const VerseComponent = ({ verseData }) => {

    const { state } = useVersesInfo();
    const { font } = state;

    const { verse_key } = verseData;

    const arabicVerse = useArabicVerse(verse_key, font)

    return (
        <div className="h-10 border text-end">
            {arabicVerse}
        </div>
    );
};

export default VerseComponent;