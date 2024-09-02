import { createContext, useEffect, useReducer } from "react";
import { FETCHING_VERSES_INFO_FAILED, FETCHING_VERSES_INFO_START, FETCHING_VERSES_INFO_SUCCESS } from "../states/action-types/ActionTypes";
import { initialVersesInfoState, VersesInfoReducer } from "../states/reducers/VersesInfoReducer";
import { useSurahId } from "../hooks/useSurahId";

export const VersesInfoContext = createContext();

// eslint-disable-next-line react/prop-types
const VersesInfoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(VersesInfoReducer, initialVersesInfoState)

    const surahId = useSurahId();

    useEffect(() => {
        dispatch({ type: FETCHING_VERSES_INFO_START })

        fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahId}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: FETCHING_VERSES_INFO_SUCCESS, payload: { versesInfo: data } })
            })
            .catch(err => dispatch({ type: FETCHING_VERSES_INFO_FAILED, payload: { error: err.message } }))
    }, [surahId, state.font])

    const value = {
        state,
        dispatch
    }

    return (
        <VersesInfoContext.Provider value={value}>
            {children}
        </VersesInfoContext.Provider>
    );
};

export default VersesInfoProvider;