import React from "react";
import {useSelector} from 'react-redux';

import "./App.css";
import SmurfRegistrationForm from './SmurfRegistrationForm';
import SmurfList from "./SmurfList";

export default () => {
  const error = useSelector(state => state.error);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <hr/>
      <SmurfRegistrationForm />
      {error !== '' && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}