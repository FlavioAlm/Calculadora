import React from 'react';
import './myStyles.css';

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