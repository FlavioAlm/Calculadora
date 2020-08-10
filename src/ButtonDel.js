import React from 'react';

function ButtonDel(props){

  return (
    <button 
      onClick={props.reset}
      style={props.style}>
        {props.name}
    </button>
  );
  
}

export default ButtonDel;