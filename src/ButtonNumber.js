import React from 'react';

function ButtonNumber(props){

  return (
    <button 
      onClick={props.onChange}
      style={props.style}>
        {props.name} 
    </button>
  );

}

export default ButtonNumber;