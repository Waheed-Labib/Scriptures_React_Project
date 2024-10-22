import Chapters from "./Chapters";
import Verses from "./Verses";
import VersesWithVerseKey from "./VersesWithVerseKey";

/* eslint-disable react/prop-types */
const Element = ({ element }) => {

    const { searchType, searchResult } = element;

    return (
        <div className="h-full">
            {
                searchType === 'chapter' && <Chapters
                    searchResult={searchResult}
                ></Chapters>
            }

            {
                searchType === 'verse key' && <VersesWithVerseKey
                    searchResult={searchResult}
                ></VersesWithVerseKey>
            }

            {
                searchType === 'verse' && <Verses
                    searchResult={searchResult}
                ></Verses>
            }
        </div>
    )
    if (searchType === 'chapter')
        return <Chapters
            searchResult={searchResult}
        ></Chapters>

    if (searchType === 'verse key')
        return <VersesWithVerseKey
            searchResult={searchResult}
        ></VersesWithVerseKey>

    if (searchType === 'verse')
        return <Verses
            searchResult={searchResult}
        ></Verses>
};

export default Element;