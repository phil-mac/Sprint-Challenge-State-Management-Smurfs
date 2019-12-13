import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isRegistering: false,
    isUpdating: false,
    isDeleting: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                smurfs: [],
                isFetching: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                smurfs: [],
                isFetching: false,
                error: action.payload.message
            }
        default:
            return state;
    }
}