// import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchDirectives = () => {
    return (
        <div className="pl-1 text-xs text-cyan-950 flex items-center gap-2">
            <div className="">
                <FaSearch></FaSearch>
            </div>
            <p>Search by <span className="font-medium">Chapter Name</span> / <span className="font-medium">Chapter Number</span> / <span className="font-medium">Part of a Verse</span> / <span className="font-medium">Verse Key (for example, 40:7)</span></p>
        </div>
    );
};

export default SearchDirectives;