import React from "react";


const Display = ({total}) => {
  const displayStyle = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: 'black',
    color: 'white',
    width: '375px',
    height: '90px',
    borderRadius: '50px',
    fontSize: '50px',
    padding: '5px'
  }
  return <div style={displayStyle}>{total}
  </div>;
};

export default Display;
