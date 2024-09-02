import { useEffect, useReducer } from "react"
import { initialSurahListState, SurahListReducer } from "../states/reducers/SurahListReducer"
import { FETCHING_SURAH_LIST_FAILED, FETCHING_SURAH_LIST_START, FETCHING_SURAH_LIST_SUCCESS } from "../states/action-types/ActionTypes"

export const useSurahList = () => {
    const [state, dispatch] = useReducer(SurahListReducer, initialSurahListState)

    useEffect(() => {
        dispatch({ type: FETCHING_SURAH_LIST_START })

        fetch("https://api.quran.com/api/v4/chapters")
            .then(res => res.json())
            .then(data => dispatch({ type: FETCHING_SURAH_LIST_SUCCESS, payload: { surahList: data.chapters } }))
            .catch(err => dispatch({ type: FETCHING_SURAH_LIST_FAILED, payload: { error: err.message } }))
    }, [])

    return { state, dispatch }
}