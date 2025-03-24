import { createContext, useState } from "react";
import { Default_Translation_IDs } from "../constants";

export const SelectedTranslationsIdsContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedTranslationsIdsProvider = ({ children }) => {

    const Selected_Translations_Ids_From_Local_Storage = JSON.parse(localStorage.getItem('aqtp-selected-translations-ids'))


    const [selectedTranslationsIds, setSelectedTranslationsIds] = useState(Selected_Translations_Ids_From_Local_Storage?.length ? Selected_Translations_Ids_From_Local_Storage : Default_Translation_IDs)

    const value = {
        selectedTranslationsIds,
        setSelectedTranslationsIds
    }

    return (
        <SelectedTranslationsIdsContext.Provider value={value}>
            {children}
        </SelectedTranslationsIdsContext.Provider>
    );
};

export default SelectedTranslationsIdsProvider;