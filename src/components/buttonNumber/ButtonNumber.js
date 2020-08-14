import React from 'react';
import './ButtonNumber.css';

function ButtonNumber(props){

  return (
    <div 
      onClick={props.onChange}
      onKeyPress={props.onKeyPress}
      className='box'>
        {props.name} 
    </div>
  );

}

export default ButtonNumber;