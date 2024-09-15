/* eslint-disable react/prop-types */
import { TranslationDropdown } from "./TranslationDropdown";

const SelectTranslation = () => {
    return (
        <div className="">
            <h3 className="pl-2 mb-2 font-semibold text-gray-500">Translations</h3>
            <TranslationDropdown></TranslationDropdown>
        </div>
    );
};

export default SelectTranslation;