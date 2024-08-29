import { FETCHING_SURAH_LIST_FAILED, FETCHING_SURAH_LIST_START, FETCHING_SURAH_LIST_SUCCESS } from "../action-types/ActionTypes"

export const initialState = {
    surahList: [],
    loading: false,
    error: ""
}

export const SurahReducer = (state, action) => {
    switch (action.type) {

        case FETCHING_SURAH_LIST_START:
            return {
                ...state,
                loading: true,
                surahList: []
            }

        case FETCHING_SURAH_LIST_SUCCESS:

            return {
                ...state,
                loading: false,
                surahList: action.payload.surahList
            }

        case FETCHING_SURAH_LIST_FAILED:

            return {
                ...state,
                loading: false,
                surahList: [],
                error: action.payload.error
            }

        default:

            return state
    }
}