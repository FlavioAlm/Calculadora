import React from 'react';

const Display = (props) => (
    <div>
      <input
        readOnly 
        type="text" 
        value={props.sequence}
        placeholder="0"
        style={props.style} />
    </div>
  
);

export default Display;