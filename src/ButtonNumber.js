import React from 'react';

function ButtonNumber(props){

  return (
    <button 
      onClick={props.onNumberChange}
      style={props.style}>{props.name} 
    </button>
  );

}

export default ButtonNumber;