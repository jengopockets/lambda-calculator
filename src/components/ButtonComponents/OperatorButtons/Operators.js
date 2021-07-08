import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorArray, setOperator]= useState(operators)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorArray.map(operate => <OperatorButton operate={operate} clickHandler={props.clickHandler}/>)}
    </div>
  );
};
export default Operators;
