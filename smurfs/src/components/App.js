import React from "react";

import "./App.css";
import SmurfRegistrationForm from './SmurfRegistrationForm';
import SmurfList from "./SmurfList";

export default () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <hr/>
      <SmurfRegistrationForm />
    </div>
  );
}