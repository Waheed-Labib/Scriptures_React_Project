import { TranslationDropdown } from "./TranslationDropdown";

const SelectTranslation = () => {
    return (
        <div className="mt-6">
            <h3 className="text-sm mb-2 font-semibold text-gray-500">Translations</h3>

            <TranslationDropdown></TranslationDropdown>
        </div>
    );
};

export default SelectTranslation;