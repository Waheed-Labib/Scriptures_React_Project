/* eslint-disable react/prop-types */
import ResultType from "./ResultType";

const SearchResults = ({ searchResults }) => {
    return (
        <div>
            {
                searchResults?.map((resultType, idx) => <ResultType
                    key={idx}
                    resultType={resultType}
                ></ResultType>)
            }
        </div>
    );
};

export default SearchResults;