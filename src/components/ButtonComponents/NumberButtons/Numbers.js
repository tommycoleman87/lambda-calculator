import React, { useState } from "react";

//import any components needed
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//Import your array data to from the provided data file

const Numbers = ({total}) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumbers] = useState(numbers);
  const numbersStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    justifyContent: 'space-around',
    height: '400px',
    order: '3',
  }
  return (
    <div style={numbersStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map(number => {
          return <NumberButton number={number} total={total}/>
       })}
    </div>
  );
};

export default Numbers;
