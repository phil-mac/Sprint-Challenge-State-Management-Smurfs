import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {registerSmurf} from '../actions';

export default () => {
    const dispatch = useDispatch();

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 0,
        height: '0cm',
        id: -1
    });

    const onSubmit = e => {
        e.preventDefault();
        console.log(newSmurf);
        // dispatch action registerSmurf (newSmurf)
        dispatch(registerSmurf(newSmurf));
    }

    const onChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
    }
    
    return(
        <form onSubmit={onSubmit}>
            <input name='name' type='text' placeholder='name' onChange={onChange}/>
            <input name='age' type='number' placeholder='age' onChange={onChange}/>
            <input name='height' type='text' placeholder='height' onChange={onChange}/> <span> cm</span>
            <button type='submit'>Register Smurf</button>
        </form>
    )
}