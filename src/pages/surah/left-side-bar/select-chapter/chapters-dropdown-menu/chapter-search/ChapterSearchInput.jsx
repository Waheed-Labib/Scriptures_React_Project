/* eslint-disable react/prop-types */
// import { useSurahList } from "../../../../../hooks/useSurahList";

import { FaSearch } from "react-icons/fa";

const ChapterSearchInput = ({ setSearchText }) => {

    return (
        <div className="w-full">
            <input onChange={(e) => setSearchText(e.target.value)} placeholder="Search Chapter" className="w-full h-8 rounded ring-1 ring-inset ring-slate-400 placeholder:text-gray-500 pl-4"></input>
            <div className="text-xs text-gray-400 pl-2 mt-2 flex items-center gap-2">
                <FaSearch></FaSearch>
                <p>Arabic spelling / English spelling / serial no.</p>
            </div>
        </div>
    );
};

export default ChapterSearchInput;