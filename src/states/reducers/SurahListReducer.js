import { FETCHING_SURAH_LIST_FAILED, FETCHING_SURAH_LIST_SUCCESS, FETCHING_SURAH_LIST_START } from "../action-types/ActionTypes"

export const initialSurahListState = {
    surahList: [],
    loading: true,
    error: ""
}

export const SurahListReducer = (state, action) => {
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
                error: action.payload.error
            }

        default:

            return state
    }
}