import React from 'react';
import './ButtonOperator.css';

function ButtonOperator(props){
  
  return (
    <div 
      onClick={props.onChange}
      className='box'>
        {props.name} 
    </div>
  );

}

export default ButtonOperator;