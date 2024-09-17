import { Divider } from "keep-react";
import { useTranslations } from "../../../../../../hooks/useTranslations";
import SimpleSkeleton from "../../../../../../components/simple-skeleton/SimpleSkeleton";
import ErrorComponent from "../../../../../../components/error-component/ErrorComponent";
import TranslationDropdownItem from "../translations-dropdown-item/TranslationDropdownItem";

/* eslint-disable react/prop-types */
const Language = ({ language }) => {

    const { translations, loading: translationsLoading, error: translationsError } = useTranslations(language.name.toLowerCase())

    return (
        <div className={`my-4 ${!translations.length && 'hidden'}`}>
            <p className="text-sm font-medium text-cyan-700 my-4">{language.name}</p>
            {
                translationsLoading &&
                <div className="flex flex-col gap-2">
                    {
                        Array.from({ length: 10 }).map((_, index) => <SimpleSkeleton key={index}></SimpleSkeleton>)
                    }
                </div>
            }
            {
                translations.map((translation, index) => <TranslationDropdownItem
                    key={index}
                    translation={translation}
                ></TranslationDropdownItem>)
            }
            {
                translationsError && <ErrorComponent errorType='Translations List Fetching Failed' errorText={translationsError}></ErrorComponent>
            }
            <Divider></Divider>
        </div>
    );
};

export default Language;