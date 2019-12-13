import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE,
    REGISTER_SMURF_START, REGISTER_SMURF_SUCCESS, REGISTER_SMURF_FAILURE,
    UPDATE_SMURF_START, UPDATE_SMURF_SUCCESS, UPDATE_SMURF_FAILURE,
    DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE
} from '../actions';

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
                isFetching: false,
                error: action.payload.message
            }


        case REGISTER_SMURF_START:
            return{
                ...state,
                isRegistering: true,
                error: ''
            }
        case REGISTER_SMURF_SUCCESS:
            return{
                ...state,
                isRegistering: false,
                error: ''
            }
        case REGISTER_SMURF_FAILURE:
            return{
                ...state,
                isRegistering: false,
                error: action.payload.message
            }

        case UPDATE_SMURF_START:
            return{
                ...state,
                isUpdating: true,
                error: ''
            }
        case UPDATE_SMURF_SUCCESS:
            return{
                ...state,
                isUpdating: false,
                error: ''
            }
        case UPDATE_SMURF_FAILURE:
            return{
                ...state,
                isUpdating: false,
                error: action.payload.message
            }

        case DELETE_SMURF_START:
            return{
                ...state,
                isDeleting: true,
                error: ''
            }
        case DELETE_SMURF_SUCCESS:
            return{
                ...state,
                isDeleting: false,
                error: ''
            }
        case DELETE_SMURF_FAILURE:
            return{
                ...state,
                isDeleting: false,
                error: action.payload.message
            }
        
        default:
            return state;
    }
}