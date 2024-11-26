import { useEffect, useReducer } from "react";
import { initialVersesInfoState, VersesInfoReducer } from "../states/reducers/VersesInfoReducer";
import { FETCHING_VERSES_INFO_FAILED, FETCHING_VERSES_INFO_START, FETCHING_VERSES_INFO_SUCCESS } from "../states/action-types/ActionTypes";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useVersesInfo = (page) => {
    const [state, dispatch] = useReducer(VersesInfoReducer, initialVersesInfoState)

    const { surahId } = useParams();

    useEffect(() => {
        dispatch({ type: FETCHING_VERSES_INFO_START })

        axios.get(`https://api.quran.com/api/v4/verses/by_chapter/${surahId}?page=${page}`)
            .then(function (response) {
                dispatch({ type: FETCHING_VERSES_INFO_SUCCESS, payload: { versesInfo: response.data } })
            })
            .catch(function (error) {
                dispatch({ type: FETCHING_VERSES_INFO_FAILED, payload: { error: error.message } })
            })

    }, [surahId, state.font, page])

    return {
        state,
        dispatch
    }
}