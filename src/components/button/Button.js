import React from 'react';
import './Button.css';

const Button = ({id, onChange, name}) => 
    <button
      className='box'
      key={id}  
      onClick={onChange}
    >
      {name} 
    </button>

export default Button;