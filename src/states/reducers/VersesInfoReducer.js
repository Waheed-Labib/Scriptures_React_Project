import { FETCHING_VERSES_INFO_FAILED, FETCHING_VERSES_INFO_START, FETCHING_VERSES_INFO_SUCCESS, SET_ARABIC_FONT } from "../action-types/ActionTypes"

export const initialVersesInfoState = {
    versesInfo: {},
    loading: false,
    error: "",
    font: 'uthmani'
}

export const VersesInfoReducer = (state, action) => {
    switch (action.type) {

        case FETCHING_VERSES_INFO_START:
            return {
                ...state,
                loading: true
            }

        case FETCHING_VERSES_INFO_SUCCESS:

            return {
                ...state,
                loading: false,
                versesInfo: action.payload.versesInfo
            }

        case FETCHING_VERSES_INFO_FAILED:

            return {
                ...state,
                loading: false,
                error: action.payload.error
            }

        case SET_ARABIC_FONT:
            return {
                ...state,
                font: action.payload.font
            }

        default:

            return state
    }
}