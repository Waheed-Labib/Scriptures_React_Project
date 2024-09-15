import { useVersesInfo } from "../../../../../hooks/useVersesInfo";
import { useArabicVerse } from "../../../../../hooks/useArabicVerse";
import SimpleSkeleton from "../../../../../components/simple-skeleton/SimpleSkeleton";
import VerseTranslations from "../verse-translations/VerseTranslations";
import TranslationInputBox from "../translation-input-box/TranslationInputBox";
import VerseComponentSideBar from "./VerseComponentSideBar";

/* eslint-disable react/prop-types */
const VerseComponent = ({ verseData, arabicFont, page }) => {

    const { state } = useVersesInfo(page);
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
        <div className="py-8">
            <div className="flex gap-8">
                <div>
                    <VerseComponentSideBar verse_key={verse_key}></VerseComponentSideBar>
                </div>
                <div className="w-full">
                    <p className="mb-12 text-end text-2xl font-medium text-slate-800">
                        {arabicVerse}
                    </p>
                    <div className="text-start">
                        <VerseTranslations verse_key={verse_key}></VerseTranslations>
                    </div>
                    <div className="mb-8">
                        <TranslationInputBox></TranslationInputBox>
                    </div>
                </div>
            </div>

            <hr></hr>
        </div>
    );
};

export default VerseComponent;