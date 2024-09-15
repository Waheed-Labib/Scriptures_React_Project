import { FaSearch } from "react-icons/fa";

const SurahPageSearchBox = () => {
    return (
        <div className="mt-2 pl-2">
            <div className="mb-2 text-gray-500 flex items-center gap-1">
                <div className="text-xs">
                    <FaSearch></FaSearch>
                </div>
                <p>Search</p>
            </div>
            <input placeholder="Search Quran" className="text-sm w-full h-10 rounded ring-1 ring-inset ring-slate-400 placeholder:text-gray-400 pl-2"></input>
        </div>
    );
};

export default SurahPageSearchBox;