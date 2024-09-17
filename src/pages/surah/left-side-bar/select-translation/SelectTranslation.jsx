/* eslint-disable react/prop-types */

import { TranslationDropdownMenu } from "./translations-dropdown-menu/translations-dropdown-menu/TranslationDropdownMenu";

const SelectTranslation = () => {
    return (
        <div className="">
            <h3 className="pl-2 mb-2 font-semibold text-gray-500">Translations</h3>
            <TranslationDropdownMenu></TranslationDropdownMenu>
        </div>
    );
};

export default SelectTranslation;