import React from 'react';
import './myStyles.css';

const CalcName = (props) => (
    <div>
      <input
        readOnly 
        type="text" 
        value={props.name}
        className='stylesName' />
    </div>
  
);

export default CalcName;