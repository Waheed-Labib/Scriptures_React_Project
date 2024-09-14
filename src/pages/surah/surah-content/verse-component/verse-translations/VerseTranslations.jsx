/* eslint-disable react/prop-types */
import { useSelectedTranslationsIds } from "../../../../../hooks/useSelectedTranslationsIds";
import SingleTranslation from "./SingleTranslation";

const VerseTranslations = ({ verse_key }) => {

    const { selectedTranslationsIds } = useSelectedTranslationsIds();

    return (
        <div>
            {
                selectedTranslationsIds?.map(translationId => <SingleTranslation
                    key={translationId}
                    translationId={translationId}
                    verse_key={verse_key}
                ></SingleTranslation>)
            }
        </div>
    );
};

export default VerseTranslations;