import React from 'react';

function ButtonOperator(props){
  
  return (
    <button 
      onClick={props.onOperatorChange}
      style={props.style}>
        {props.name}
    </button>
  );

}

export default ButtonOperator;