import { createContext, useEffect, useReducer } from "react";
import { initialSurahListState, SurahListReducer } from "../states/reducers/SurahListReducer";
import { FETCHING_SURAH_LIST_FAILED, FETCHING_SURAH_LIST_START, FETCHING_SURAH_LIST_SUCCESS } from "../states/action-types/ActionTypes";
import axios from "axios";

export const SurahListContext = createContext();

// eslint-disable-next-line react/prop-types
const SurahListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(SurahListReducer, initialSurahListState)

    useEffect(() => {
        dispatch({ type: FETCHING_SURAH_LIST_START })

        axios.get('https://api.quran.com/api/v4/chapters')
            .then(function (response) {
                dispatch({ type: FETCHING_SURAH_LIST_SUCCESS, payload: { surahList: response.data.chapters } })
            })
            .catch(function (error) {
                dispatch({ type: FETCHING_SURAH_LIST_FAILED, payload: { error: error.message } })
            })

    }, [])

    const value = { state, dispatch }

    return (
        <SurahListContext.Provider value={value}>
            {children}
        </SurahListContext.Provider>
    );
};

export default SurahListProvider;