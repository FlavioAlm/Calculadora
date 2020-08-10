import React from 'react';

function ButtonOperator(props){
  
  return (
    <button 
      onClick={props.onChange}
      style={props.style}>
        {props.name}
    </button>
  );

}

export default ButtonOperator;