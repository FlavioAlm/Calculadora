import React from 'react';
import './myStyles.css';

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