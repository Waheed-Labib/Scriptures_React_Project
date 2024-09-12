import { createContext, useState } from "react";

export const SelectedTranslationsIdsContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedTranslationsIdsProvider = ({ children }) => {

    const [selectedTranslationsIds, setSelectedTranslationsIds] = useState(JSON.parse(localStorage.getItem('aqtp-selected-translations-ids')) || [131])

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