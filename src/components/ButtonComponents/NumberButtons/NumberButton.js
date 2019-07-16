import React from "react";

const NumberButton = ({number}) => {
  const numberStyle = {
    background : '#0E447E',
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={numberStyle}>{number}</button>
    </>
  );
};

export default NumberButton;
