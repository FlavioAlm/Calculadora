import React from 'react';
import './Button.css';

function Button(props){

  return (
    <div
      className='box'
      key={props.id}  
      onClick={props.onChange}
    >
      {props.name} 
    </div>
  );

}

export default Button;