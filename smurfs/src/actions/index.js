import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const REGISTER_SMURF_START = 'REGISTER_SMURF_START';
export const REGISTER_SMURF_SUCCESS = 'REGISTER_SMURF_SUCCESS';
export const REGISTER_SMURF_FAILURE = 'REGISTER_SMURF_FAILURE';

export const fetchSmurfs = () => dispatch => {
    console.log('fetchSmurf action called')
    dispatch({type: FETCH_SMURFS_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then (res => {
        console.log(res.data);
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err})

    })
}

export const registerSmurf = newSmurf => dispatch => {
    dispatch({type: REGISTER_SMURF_START});
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then (res => {
        console.log(res.data);
        dispatch({type: REGISTER_SMURF_SUCCESS, payload: res.data})
        dispatch(fetchSmurfs());
    })
    .catch(err => {
        console.log(err);
        dispatch({type: REGISTER_SMURF_FAILURE, payload: err})

    })
}