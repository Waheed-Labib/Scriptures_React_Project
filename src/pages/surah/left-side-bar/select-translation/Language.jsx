import { Divider } from "keep-react";
import { useTranslations } from "../../../../hooks/useTranslations";
import TranslationDropdownItem from "./TranslationDropdownItem";

/* eslint-disable react/prop-types */
const Language = ({ language }) => {

    const { translations, loading: translationsLoading, error: translationsError } = useTranslations(language.name.toLowerCase())

    return (
        <div className={`my-4 ${!translations.length && 'hidden'}`}>
            <p className="text-sm font-medium text-cyan-700 my-4">{language.name}</p>
            {
                translations.map((translation, index) => <TranslationDropdownItem
                    key={index}
                    translation={translation}
                    translationsLoading={translationsLoading}
                    translationsError={translationsError}
                ></TranslationDropdownItem>)
            }
            <Divider></Divider>
        </div>
    );
};

export default Language;