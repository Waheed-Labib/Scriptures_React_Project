/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";

const TranslationDropdownItem = ({ translation }) => {
    return (
        <DropdownItem>
            <input type='checkbox'></input>
            <p>{translation.author_name}</p>
        </DropdownItem>
    );
};

export default TranslationDropdownItem;