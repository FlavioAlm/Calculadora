import React from 'react';
import './myStyles.css';

function ButtonEqual(props){

  return (
    <button 
      onClick={props.onResultChange}
      className='stylesOperator'>
        {props.name}
    </button>
  );
  
}

export default ButtonEqual;