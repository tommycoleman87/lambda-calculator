import React from "react";

const NumberButton = ({number}) => {
  let numberStyle;
  console.log(number)
  if(number == 0) {
    numberStyle = {
      background : '#0E447E',
      width: '180px',
      borderRadius: '60px',
      color: 'white',

    }
  } else {
    numberStyle = {
      background : '#0E447E',
      color: 'white',
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={numberStyle}>{number}</button>
    </>
  );
};

export default NumberButton;
