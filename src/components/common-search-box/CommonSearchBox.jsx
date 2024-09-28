/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
import { commonSearch } from "../../utilities/search-methods/commonSearch";

const CommonSearchBox = ({ setIsSearchModalOpen, setSearchResults }) => {

    const handleInputClick = () => {
        if (setIsSearchModalOpen) setIsSearchModalOpen(true)
    }

    const handleSearchTextChange = (e) => {
        const searchText = e.target.value;
        const result = commonSearch(searchText);
        console.log(result);
        // setSearchResults(result)
    }

    return (
        <div>
            <div onClick={handleInputClick}>
                <input onChange={handleSearchTextChange} placeholder="Search Quran" className="w-full h-10 rounded ring-1 ring-inset ring-cyan-950 placeholder:text-gray-600 pl-4"></input>
            </div>

            <div className="pl-1 text-xs text-cyan-950 flex items-center gap-2 mt-2">
                <div className="">
                    <FaSearch></FaSearch>
                </div>
                <p>Search by <span className="font-medium">Chapter Name</span> / <span className="font-medium">Chapter Number</span> / <span className="font-medium">Part of a Verse</span> / <span className="font-medium">Verse Key (10:5 is 5th ayah of 10th surah.)</span></p>
            </div>
        </div>
    );
};

export default CommonSearchBox;