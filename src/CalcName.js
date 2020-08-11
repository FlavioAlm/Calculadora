import React from 'react';
import './myStyles.css';

const CalcName = (props) => (
    <div>
      <input
        readOnly 
        type="text" 
        value={props.name}
        placeholder="0"
        className='stylesName' />
    </div>
  
);

export default CalcName;