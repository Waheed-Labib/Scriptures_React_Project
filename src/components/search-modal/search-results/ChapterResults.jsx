import SurahLinkDetailed from "../../surah-link-detailed/SurahLinkDetailed";

/* eslint-disable react/prop-types */
const ChapterResults = ({ searchResult }) => {
    return (
        <div className="flex flex-col gap-2">
            {
                searchResult.map((surah, idx) => <SurahLinkDetailed
                    key={idx}
                    surah={surah}
                ></SurahLinkDetailed>)
            }
        </div>
    );
};

export default ChapterResults;