import { createContext, useState } from "react";
import { useSelectedTranslations } from "../hooks/useSelectedTranslations";

export const SelectedTranslationsContext = createContext();

// eslint-disable-next-line react/prop-types
const SelectedTranslationsProvider = ({ children }) => {

    const [selectedTranslations, setSelectedTranslations] = useState(useSelectedTranslations() || [131])

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