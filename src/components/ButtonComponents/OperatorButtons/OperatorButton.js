import React from "react";

const OperatorButton = ({operator, value,  total}) => {
  const operatorStyle = {
    background: '#007497',
    color: 'white',
  }
 
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={operatorStyle} onClick={total} value={value}>{operator}</button>
    </>
  
  );
};

export default OperatorButton;
