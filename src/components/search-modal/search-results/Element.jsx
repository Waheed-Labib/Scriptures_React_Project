import ChapterResults from "./ChapterResults";
import VerseResults from "./VerseResults";
import VerseWithVerseKeyResults from "./VersesWithVerseKeyResult";

/* eslint-disable react/prop-types */
const Element = ({ element, setIsSearchModalOpen }) => {

    const { searchType, searchResult } = element;

    if (searchType === 'chapter')
        return <ChapterResults
            searchResult={searchResult}
        ></ChapterResults>

    if (searchType === 'verse key')
        return <VerseWithVerseKeyResults
            searchResult={searchResult}
            setIsSearchModalOpen={setIsSearchModalOpen}
        ></VerseWithVerseKeyResults>

    if (searchType === 'verse')
        return <VerseResults
            searchResult={searchResult}
            setIsSearchModalOpen={setIsSearchModalOpen}
        ></VerseResults>
};

export default Element;