/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTranslations } from "../../../../../../hooks/useTranslations";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import TranslationDropdownItem from "../translations-dropdown-item/TranslationDropdownItem";
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";

const TranslationSearchOutput = ({ searchText }) => {

    const { translations, loading: translationsLoading, error: translationsError } = useTranslations;

    const [searchResult, setSearchResult] = useState([]);

    return (
        <div className="h-72 overflow-y-scroll">
            searching
            {
                translationsLoading && <div className="flex flex-col gap-2">
                    {
                        Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>
            }
            {
                searchResult?.map(translation => <TranslationDropdownItem
                    key={translation?.id}
                    translation={translation}
                ></TranslationDropdownItem>)
            }
            {
                translationsError && <ErrorComponent errorType='Search Result Fetching Failed' errorText={translationsError}></ErrorComponent>
            }
        </div>
    );
};

export default TranslationSearchOutput;