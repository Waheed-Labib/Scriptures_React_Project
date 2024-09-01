import { FETCHING_VERSES_FAILED, FETCHING_VERSES_START, FETCHING_VERSES_SUCCESS, SETTING_ARABIC_FONT } from "../action-types/ActionTypes"

export const initialVersesState = {
    verses: [],
    font: 'uthmani',
    loading: true,
    error: ""
}

export const VersesReducer = (state, action) => {
    switch (action.type) {

        case FETCHING_VERSES_START:
            return {
                ...state,
                loading: true,
                verses: []
            }

        case FETCHING_VERSES_SUCCESS:

            return {
                ...state,
                loading: false,
                verses: action.payload.verses
            }

        case FETCHING_VERSES_FAILED:

            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case SETTING_ARABIC_FONT:

            return {
                ...state,
                font: action.payload.font
            }

        default:

            return state
    }
}