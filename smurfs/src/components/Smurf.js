import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteSmurf} from '../actions';

export default (props) => {
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => {dispatch(deleteSmurf(props.smurf.id))}}>X</button>
            <span> {props.smurf.name} - {props.smurf.age} - {props.smurf.height} - {props.smurf.id}</span>
        </div>
    )
}