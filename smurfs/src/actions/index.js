export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';


export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START});
    fetch('http://localhost:3333/smurfs')
    .then(res => res.json())
    .then (data => {
        console.log(data);
        dispatch({type: FETCH_SMURFS_SUCCESS, payload: data})
    })
    .catch(err => {
        console.log(err);
        dispatch({type: FETCH_SMURFS_FAILURE, payload: err})

    })
}