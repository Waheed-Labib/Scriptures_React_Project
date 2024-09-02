import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import { useArabicVerse } from "../../../../hooks/useArabicVerse";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";

/* eslint-disable react/prop-types */
const VerseComponent = ({ verseData }) => {

    const { state } = useVersesInfo();
    const { loading, font } = state;

    const { verse_key } = verseData;

    const arabicVerse = useArabicVerse(verse_key, font)

    if (loading) return (
        <SimpleSkeleton></SimpleSkeleton>
    )

    return (
        <div className="h-10 border text-end">
            {arabicVerse}
        </div>
    );
};

export default VerseComponent;