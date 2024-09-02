import { useVerses } from "../../../hooks/useVerses";

/* eslint-disable react/prop-types */
const SurahContent = () => {

    const { state } = useVerses();
    const { verses, loading, error } = state;
    console.log('verses', verses, 'loading', loading, 'error', error)

    return (
        <div className="px-12">
            Surah Content
        </div>
    );
};

export default SurahContent;