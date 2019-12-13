import React, { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {fetchSmurfs} from '../actions';

import "./App.css";

export default () => {
  const dispatch = useDispatch();
  const smurfs = useSelector(state => state.smurfs);

  useEffect(() => {
    dispatch(fetchSmurfs());
  }, [])
  
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      
      {smurfs.map(smurf => (
        <p key={smurf.id}>{smurf.name}</p>
      ))}
    </div>
  );
}