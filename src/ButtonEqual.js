import React from 'react';

function ButtonEqual(props){

  return (
    <button 
      onClick={props.onResultChange}
      style={props.style}>
        {props.name}
    </button>
  );
  
}

export default ButtonEqual;