/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useTranslations } from "../../../../../../hooks/useTranslations";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import TranslationDropdownItem from "../translations-dropdown-item/TranslationDropdownItem";
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import { Button } from "keep-react";

const TranslationSearchOutput = ({ searchText, setSearchText }) => {

    const { translations, loading: translationsLoading, error: translationsError } = useTranslations();
    console.log('translations', translations)

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([])

        translations?.map(translation => {

            if (translation.language_name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);

            else if (translation.author_name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);

            else if (translation.name.toLowerCase().includes(searchText.toLowerCase())) return setSearchResult(prevResult => [...prevResult, translation]);
        })

    }, [searchText, translations])

    return (
        <div className="h-72 overflow-y-scroll">
            <Button onClick={() => setSearchText('')} size="xs" className="w-full my-1 gap-1 bg-transparent text-red-800 border border-red-800 hover:text-red-700 hover:border-red-700 hover:bg-transparent">
                <p>Cancel Search Result</p>
                <p>X</p>
            </Button>
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
                    search={true}
                ></TranslationDropdownItem>)
            }
            {
                translationsError && <ErrorComponent errorType='Search Result Fetching Failed' errorText={translationsError}></ErrorComponent>
            }
        </div>
    );
};

export default TranslationSearchOutput;