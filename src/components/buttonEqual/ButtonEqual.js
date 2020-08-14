import React from 'react';
import './ButtonEqual.css';

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