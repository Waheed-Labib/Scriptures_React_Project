/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { TranslationDropdownMenu } from "./translations-dropdown-menu/translations-dropdown-menu/TranslationDropdownMenu";

const SelectTranslation = ({ inline }) => {
    return (
        <div className={`${inline && 'flex items-center justify-center gap-4'}`}>
            <h3 className="pl-2 mb-2 font-semibold text-gray-500">Translation Books</h3>
            <TranslationDropdownMenu inline={inline}></TranslationDropdownMenu>
        </div>
    );
};

export default SelectTranslation;