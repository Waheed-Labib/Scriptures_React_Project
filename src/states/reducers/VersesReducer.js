import { FETCHING_VERSES_FAILED, FETCHING_VERSES_START, FETCHING_VERSES_SUCCESS } from "../action-types/ActionTypes"

export const initialVersesState = {
    verses: [],
    loading: false,
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

        default:

            return state
    }
}