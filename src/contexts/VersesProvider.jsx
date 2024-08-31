import { createContext, useEffect, useReducer } from "react";
import { FETCHING_VERSES_START } from "../states/action-types/ActionTypes";
import { initialVersesState, VersesReducer } from "../states/reducers/VersesReducer";


export const VersesContext = createContext();

// eslint-disable-next-line react/prop-types
const VersesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(VersesReducer, initialVersesState)

    // const surahId = useSurahId();

    useEffect(() => {
        dispatch({ type: FETCHING_VERSES_START })
    }, [])

    return (
        <VersesContext.Provider value={state}>
            {children}
        </VersesContext.Provider>
    );
};

export default VersesProvider;