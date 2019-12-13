import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const REGISTER_SMURF_START = 'REGISTER_SMURF_START';
export const REGISTER_SMURF_SUCCESS = 'REGISTER_SMURF_SUCCESS';
export const REGISTER_SMURF_FAILURE = 'REGISTER_SMURF_FAILURE';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

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
    console.log('register smurf action')
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

export const updateSmurf = (updateId, newSmurf) => dispatch => {
    dispatch({type: UPDATE_SMURF_START});
    axios
    .put(`http://localhost:3333/smurfs/${updateId}`, newSmurf)
    .then (res => {
        console.log(res.data);

        dispatch({type: UPDATE_SMURF_SUCCESS, payload: res.data})
        dispatch(fetchSmurfs());
    })
    .catch(err => {
        console.log(err);
        dispatch({type: UPDATE_SMURF_FAILURE, payload: err})

    })
}

export const deleteSmurf = (id) => dispatch => {
    dispatch({type: DELETE_SMURF_START});
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then (res => {
        console.log(res.data);
        dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data})
        dispatch(fetchSmurfs());
    })
    .catch(err => {
        console.log(err);
        dispatch({type: DELETE_SMURF_FAILURE, payload: err})
    })
}