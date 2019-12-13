import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {registerSmurf, updateSmurf} from '../actions';

export default () => {
    const dispatch = useDispatch();
    const [formType, setFormType] = useState('Register');

    const [newSmurfData, setNewSmurfData] = useState({
        name: '',
        age: 0,
        height: '0cm',
        id: -1
    });

    const [updateId, setUpdateId] = useState(-1);

    const onSubmit = e => {
        e.preventDefault();
        console.log(newSmurfData);
        // dispatch action registerSmurf (newSmurf)
        if (formType == 'Register'){
            dispatch(registerSmurf(newSmurfData));
        } else{
            dispatch(updateSmurf(updateId, newSmurfData))
        }
    }

    const onChange = e => {
        setNewSmurfData({...newSmurfData, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <button onClick={() => setFormType('Register')}>Register New Smurf</button>
            <button onClick={() => setFormType('Update')}>Update Existing Smurf</button>
            <br/>
            <br/>
            <form onSubmit={onSubmit}>
                {formType === 'Update' && <>
                    <input name='id' type='number' placeholder='id of smurf to update' onChange={e => setUpdateId(e.target.value)}/>
                    <br/></>
                }
                <input name='name' type='text' placeholder='name' onChange={onChange}/>
                <br/>

                <input name='age' type='number' placeholder='age' onChange={onChange}/>
                <br/>

                <input name='height' type='text' placeholder='height' onChange={onChange}/>
                <br/>
                <button type='submit'>{formType} Smurf</button>
            </form>
        </div>
        
    )
}