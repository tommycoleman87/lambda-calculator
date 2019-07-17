import React from "react";

const SpecialButton = ({special, total}) => {
  const specialStyle = {
    background: '#125C99',
    color: 'white',
    marginTop: '8px'
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={specialStyle} onClick={total}>{special}</button>
    </>
  );
};

export default SpecialButton;