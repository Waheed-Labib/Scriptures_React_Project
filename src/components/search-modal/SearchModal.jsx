import { useState } from "react";
import CommonSearchBox from "../common-search-box/CommonSearchBox";
import SearchResults from "./SearchResults";

/* eslint-disable react/prop-types */
export const SearchModal = ({ isSearchModalOpen, setIsSearchModalOpen }) => {

    const [searchResults, setSearchResults] = useState([]);
    console.log('searchResults', searchResults)

    return (
        <div onClick={() => setIsSearchModalOpen(false)} className={`fixed z-[100] w-screen ${isSearchModalOpen ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
            <div onClick={(e_) => e_.stopPropagation()} className={`absolute rounded-lg w-[80vw] h-[80vh] bg-white p-8 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${isSearchModalOpen ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>

                <CommonSearchBox
                    searchResults={searchResults}
                    setSearchResults={setSearchResults}
                ></CommonSearchBox>

                <SearchResults
                    searchResults={searchResults}
                ></SearchResults>
            </div>
        </div>
    );
};

