import { createContext, useEffect, useReducer } from "react";
import { initialState, SurahReducer } from "../states/reducers/SurahReducer";
import { FETCHING_SURAH_LIST_FAILED, FETCHING_SURAH_LIST_START, FETCHING_SURAH_LIST_SUCCESS } from "../states/action-types/ActionTypes";

export const SurahContext = createContext();

// eslint-disable-next-line react/prop-types
const SurahProvider = ({ children }) => {


    const [state, dispatch] = useReducer(SurahReducer, initialState)

    useEffect(() => {
        dispatch({ type: FETCHING_SURAH_LIST_START })

        fetch("https://api.quran.com/api/v4/chapters")
            .then(res => res.json())
            .then(data => dispatch({ type: FETCHING_SURAH_LIST_SUCCESS, payload: { surahList: data.chapters } }))
            .catch(err => dispatch({ type: FETCHING_SURAH_LIST_FAILED, payload: { error: err.message } }))
    }, [])

    return (
        <SurahContext.Provider value={state}>
            {children}
        </SurahContext.Provider>
    );
};

export default SurahProvider;