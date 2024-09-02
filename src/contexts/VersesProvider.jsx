import { createContext, useEffect, useReducer } from "react";
import { FETCHING_VERSES_FAILED, FETCHING_VERSES_START } from "../states/action-types/ActionTypes";
import { initialVersesState, VersesReducer } from "../states/reducers/VersesReducer";
import { useSurahId } from "../hooks/useSurahId";

export const VersesContext = createContext();

// eslint-disable-next-line react/prop-types
const VersesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(VersesReducer, initialVersesState)

    const surahId = useSurahId();

    useEffect(() => {
        dispatch({ type: FETCHING_VERSES_START })

        fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => dispatch({ type: FETCHING_VERSES_FAILED, payload: { error: err.message } }))
    }, [surahId, state.font])

    const value = {
        state,
        dispatch
    }

    return (
        <VersesContext.Provider value={value}>
            {children}
        </VersesContext.Provider>
    );
};

export default VersesProvider;