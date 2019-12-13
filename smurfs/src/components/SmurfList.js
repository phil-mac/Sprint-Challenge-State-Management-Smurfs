import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {fetchSmurfs} from '../actions';

import "./App.css";
import Smurf from './Smurf';

export default () => {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [])
  
  return (
    <div>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  );
}