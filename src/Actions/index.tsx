export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'FETCH_LIST_FAILURE';

export const fetchWhiskies = () => ({
    type: FETCH_LIST,
});

export const fetchListSuccess = (whiskies:any) =>  {
    return {
        type: FETCH_LIST_SUCCESS,
        payload: whiskies
    }
}

export const fetchListFailure = (message:any) => ({
    type: FETCH_LIST_FAILURE,
    payload: message
});
