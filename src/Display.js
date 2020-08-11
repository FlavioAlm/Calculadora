import React from 'react';
import './myStyles.css';

const Display = (props) => (
    <div>
      <input
        readOnly 
        type="text" 
        value={props.sequence}
        placeholder="0"
        className='stylesDisplay' />
    </div>
  
);

export default Display;