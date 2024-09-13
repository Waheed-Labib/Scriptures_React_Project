/* eslint-disable react/prop-types */
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useSingleTranslationOfVerse } from "../../../../hooks/useSingleTranslationOfVerse";

const SingleTranslation = ({ translationId, verse_key }) => {

    const { translation, translationName, loading, error } = useSingleTranslationOfVerse(translationId, verse_key)

    if (loading) return <SimpleSkeleton></SimpleSkeleton>
    if (error) return <p><span className="text-red-600">Error !</span> {error}</p>

    return (
        <div className="mb-8">
            <p className="">{translation.replace(/<sup[^>]*>.*?<\/sup>/g, "")}</p>
            <p className="text-xs">- {translationName}</p>
        </div>
    );
};

export default SingleTranslation;