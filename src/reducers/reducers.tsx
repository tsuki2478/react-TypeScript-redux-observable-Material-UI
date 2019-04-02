import {
    FETCH_LIST,
    FETCH_LIST_FAILURE,
    FETCH_LIST_SUCCESS
} from '../Actions';

const initialState = {
    whiskies: [],
    isLoading: false,
    error: null
};

export default function rootReducer(state = initialState, action:any) {
    switch (action.type) {
        case FETCH_LIST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case FETCH_LIST_SUCCESS:
            return {
                whiskies: [...action.payload],
                isLoading: false,
                error: null
            };
        case FETCH_LIST_FAILURE:
            return {
                whiskies: [],
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
