import React from "react";


const Display = () => {
  const displayStyle = {
    display: 'block',
    background: 'darkgrey',
    width: '375px',
    height: '90px',
    borderRadius: '50px'
  }
  return <div style={displayStyle}>{/* Display any props data here */}
  </div>;
};

export default Display;
