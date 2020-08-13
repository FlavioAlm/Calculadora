import React from 'react';
import './myStyles.css';

function ButtonEqual(props){

  return (
    <div 
      onClick={props.onChange}
      className='box'>
        {props.name} 
    </div>
  );
  
}

export default ButtonEqual;