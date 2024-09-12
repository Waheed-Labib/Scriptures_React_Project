import { createContext, useState } from "react";

export const SelectedTranslationsContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedTranslationsProvider = ({ children }) => {

    const [selectedTranslations, setSelectedTranslations] = useState(JSON.parse(localStorage.getItem('aqtp-selected-translations')) || [131, 161])

    const value = {
        selectedTranslations,
        setSelectedTranslations
    }

    return (
        <SelectedTranslationsContext.Provider value={value}>
            {children}
        </SelectedTranslationsContext.Provider>
    );
};

export default SelectedTranslationsProvider;