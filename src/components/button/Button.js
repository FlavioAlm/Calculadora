import React from 'react';
import './Button.css';

function Button(props){

  return (
    <div
      key={props.id}  
      onClick={props.onChange}
      className='box'>
        {props.name} 
    </div>
  );

}

export default Button;