import { useState } from "react";
import CommonSearchBox from "../common-search-box/CommonSearchBox";
import SearchResults from "./search-results/SearchResults";
import RecentlySearched from "./recently-searched/RecentlySearched";
import MostSearched from "./most-searched/MostSearched";

/* eslint-disable react/prop-types */
export const SearchModal = ({ isSearchModalOpen, setIsSearchModalOpen }) => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    // console.log(searchResults)

    return (
        <div onClick={() => setIsSearchModalOpen(false)} className={`fixed z-[100] w-screen ${isSearchModalOpen ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
            <div onClick={(e_) => e_.stopPropagation()} className={`absolute rounded-lg w-[80vw] h-[80vh] bg-white p-8 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${isSearchModalOpen ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'} flex flex-col justify-between`}>

                <div className="">
                    <CommonSearchBox
                        searchText={searchText}
                        setSearchText={setSearchText}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                    ></CommonSearchBox>
                </div>

                <div className="h-4/5 overflow-y-scroll">
                    {
                        searchText ?

                            <SearchResults
                                searchResults={searchResults}
                                setIsSearchModalOpen={setIsSearchModalOpen}
                            ></SearchResults>

                            :
                            <>
                                <RecentlySearched></RecentlySearched>
                                <MostSearched></MostSearched>
                            </>
                    }
                </div>

            </div>
        </div>
    );
};

