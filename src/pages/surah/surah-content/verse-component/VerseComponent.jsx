import { useVersesInfo } from "../../../../hooks/useVersesInfo";
import { useArabicVerse } from "../../../../hooks/useArabicVerse";
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import VerseTranslations from "../verse-translations/VerseTranslations";

/* eslint-disable react/prop-types */
const VerseComponent = ({ verseData, arabicFont }) => {

    const { state } = useVersesInfo();
    const { loading: loadingVerses } = state;

    const { verse_key } = verseData;

    const { arabicVerse, loading: loadingVerse, error } = useArabicVerse(verse_key, arabicFont)

    if (loadingVerses || loadingVerse) return (
        <SimpleSkeleton></SimpleSkeleton>
    )

    if (error) return (
        <div className="p-1 w-8 h-8 rounded-full flex justify-center items-center bg-rose-300 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-200">!</h1>
        </div>
    )

    return (
        <div className="">
            <p className="text-end text-xl font-medium text-slate-600">
                {arabicVerse}
            </p>
            <VerseTranslations verse_key={verse_key}></VerseTranslations>
        </div>
    );
};

export default VerseComponent;