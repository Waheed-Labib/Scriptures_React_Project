// import React from 'react';

import { SearchBar } from "../../../components/search-bar/SearchBar";

const Home = () => {
    return (
        <div className="m-12">
            <SearchBar name="surah" label="Enter Surah Name" type="text"></SearchBar>
        </div>
    );
};

export default Home;