import React from 'react';
import './ButtonDel.css';

function ButtonDel(props){

  return (
    <div 
      onClick={props.onChange}
      className='box'>
        {props.name} 
    </div>
  );
  
}

export default ButtonDel;