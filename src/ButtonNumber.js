import React from 'react';
import './myStyles.css';

function ButtonNumber(props){

  return (
    <button 
      onClick={props.onChange}
      className='stylesNumber'>
        {props.name} 
    </button>
  );

}

export default ButtonNumber;