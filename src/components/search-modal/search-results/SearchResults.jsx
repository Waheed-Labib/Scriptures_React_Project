/* eslint-disable react/prop-types */

import Element from "./Element";

const SearchResults = ({ searchResults, setIsSearchModalOpen }) => {

    return (
        <div className="">
            {
                searchResults.map((element, idx) => <Element
                    key={idx}
                    element={element}
                    setIsSearchModalOpen={setIsSearchModalOpen}
                ></Element>)
            }
        </div >
    );
};

export default SearchResults;