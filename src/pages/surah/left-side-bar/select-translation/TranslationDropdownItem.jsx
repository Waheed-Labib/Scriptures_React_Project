/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";
import { useSelectedTranslations } from "../../../../hooks/useSelectedTranslations";

const TranslationDropdownItem = ({ translation }) => {

    const { selectedTranslations } = useSelectedTranslations();
    const isSelected = selectedTranslations.includes(translation.id)

    return (
        <DropdownItem>
            <input type='checkbox' checked={isSelected}></input>
            <p>{translation.name}</p>
        </DropdownItem>
    );
};

export default TranslationDropdownItem;