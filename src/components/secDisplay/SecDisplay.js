import React from 'react';
import './SecDisplay.css';

const SecDisplay = React.forwardRef( ({sequence, onKeyDown}, ref) => 
    <input 
      className="secDisplay"
      type="text"
      value={sequence} 
      onKeyDown={onKeyDown}
      placeholder="0"
      ref={ref}
    >
    </input> 
)

export default SecDisplay;