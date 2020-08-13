import React from 'react';
import './myStyles.css';

const Display = (props) => (

    <input 
      className="box2"
      type="text"
      value={props.sequence} 
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    >
    </input> 
);

export default Display;