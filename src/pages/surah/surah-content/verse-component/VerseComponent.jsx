import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import { useArabicVerse } from "../../../../hooks/useArabicVerse";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";

/* eslint-disable react/prop-types */
const VerseComponent = ({ verseData }) => {

    const { state } = useVersesInfo();
    const { loading: loadingVerses, font } = state;

    const { verse_key } = verseData;

    const { arabicVerse, loading: loadingVerse, error } = useArabicVerse(verse_key, font)

    if (loadingVerses || loadingVerse) return (
        <SimpleSkeleton></SimpleSkeleton>
    )

    if (error) return (
        <div className="p-1 w-8 h-8 rounded-full flex justify-center items-center bg-rose-300 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-200">!</h1>
        </div>
    )

    return (
        <div className="h-10 border text-end">
            {arabicVerse}
        </div>
    );
};

export default VerseComponent;