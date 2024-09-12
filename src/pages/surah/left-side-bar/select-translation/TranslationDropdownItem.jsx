/* eslint-disable react/prop-types */
import { DropdownItem } from "keep-react";
import { useSelectedTranslationsIds } from "../../../../hooks/useSelectedTranslationsIds";
import { setSelectedTranslationsIdsToLS } from "../../../../utilities/setSelectedTranslationsIdsToLS";

const TranslationDropdownItem = ({ translation }) => {

    const { selectedTranslationsIds, setSelectedTranslationsIds } = useSelectedTranslationsIds();
    const isSelected = selectedTranslationsIds.includes(translation.id);

    const handleTranslationChange = () => {
        if (isSelected) {
            // the translation will be removed 
            const remainingSelectedTranslationsIds = selectedTranslationsIds.filter(selected => selected !== translation.id)
            setSelectedTranslationsIds(remainingSelectedTranslationsIds)
            setSelectedTranslationsIdsToLS(remainingSelectedTranslationsIds)
        }
        else {
            // the translation will be added
            const newSelectedTranslationsIds = [...selectedTranslationsIds, translation.id]
            setSelectedTranslationsIds(newSelectedTranslationsIds)
            setSelectedTranslationsIdsToLS(newSelectedTranslationsIds)
        }
    }

    return (
        <DropdownItem>
            <input onChange={handleTranslationChange} type='checkbox' checked={isSelected}></input>
            <p>{translation.name}</p>
        </DropdownItem>
    );
};

export default TranslationDropdownItem;