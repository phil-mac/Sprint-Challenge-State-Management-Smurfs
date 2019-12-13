import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteSmurf} from '../actions';

export default (props) => {
    const dispatch = useDispatch();

    return(
        <div>
            <span>{props.smurf.name} - {props.smurf.age} - {props.smurf.height} - {props.smurf.id} - </span>
            <button onClick={() => {dispatch(deleteSmurf(props.smurf.id))}} style={{color:'red', borderRadius: '50px' }}>X</button>
        </div>
    )
}