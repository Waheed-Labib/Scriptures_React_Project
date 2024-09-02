import { useEffect, useReducer } from "react";
import { initialVersesInfoState, VersesInfoReducer } from "../states/reducers/VersesInfoReducer";
import { useSurahId } from "./useSurahId";
import { FETCHING_VERSES_INFO_FAILED, FETCHING_VERSES_INFO_START, FETCHING_VERSES_INFO_SUCCESS } from "../states/action-types/ActionTypes";

export const useVersesInfo = () => {
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

    return {
        state,
        dispatch
    }
}