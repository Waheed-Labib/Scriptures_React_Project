import { useVerses } from "../../../hooks/useVerses";

/* eslint-disable react/prop-types */
const SurahContent = () => {

    const { state } = useVerses();
    console.log(state.font)

    return (
        <div className="px-12">
            Surah Content
        </div>
    );
};

export default SurahContent;