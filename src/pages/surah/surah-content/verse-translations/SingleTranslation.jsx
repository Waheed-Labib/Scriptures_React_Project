/* eslint-disable react/prop-types */
import SimpleSkeleton from "../../../../components/simple-skeleton/SimpleSkeleton";
import { useSingleTranslationOfVerse } from "../../../../hooks/useSingleTranslationOfVerse";

const SingleTranslation = ({ translationId, verse_key }) => {

    const { translation, loading, error } = useSingleTranslationOfVerse(translationId, verse_key)

    if (loading) return <SimpleSkeleton></SimpleSkeleton>
    if (error) return <p><span className="text-red-600">Error !</span> {error}</p>

    return (
        <div>
            <p>{translation}</p>
        </div>
    );
};

export default SingleTranslation;