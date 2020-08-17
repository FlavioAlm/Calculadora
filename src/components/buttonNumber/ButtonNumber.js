import React from 'react';
import './ButtonNumber.css';

function ButtonNumber(props){

  return (
    <div
      key={props.id}  
      onClick={props.onChange}
      className='box'>
        {props.name} 
    </div>
  );

}

export default ButtonNumber;