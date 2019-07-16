import React from "react";

const OperatorButton = ({operator, value}) => {
  const operatorStyle = {
    background: '#007497',
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={operatorStyle}>{operator}</button>
    </>
  
  );
};

export default OperatorButton;
