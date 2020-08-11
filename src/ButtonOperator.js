import React from 'react';
import './myStyles.css';

function ButtonOperator(props){
  
  return (
    <button 
      onClick={props.onChange}
      className='stylesOperator'>
        {props.name}
    </button>
  );

}

export default ButtonOperator;