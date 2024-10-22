/* eslint-disable react/prop-types */

import Element from "./Element";

const SearchResults = ({ searchResults }) => {

    return (
        <div>
            {
                searchResults.map((element, idx) => <Element
                    key={idx}
                    element={element}
                ></Element>)
            }
        </div >
    );
};

export default SearchResults;