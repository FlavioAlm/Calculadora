import React from 'react';
import './SecDisplay.css';

const SecDisplay = (props) => (
    <input 
      className="secDisplay"
      type="text"
      value={props.sequence} 
      onChange={ null}
      onKeyDown={props.onKeyDown}
      placeholder="0"
    >
    </input> 
);

export default SecDisplay;