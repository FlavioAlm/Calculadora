import React from 'react';
import './Display.css';

const Display = (props) => (
  
    <input 
      className="display"
      type="text"
      value={props.sequence} 
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      placeholder="0"
    >
    </input> 
);

export default Display;