import React from 'react';
import './myStyles.css';

function ButtonDel(props){

  return (
    <button 
      onClick={props.onClick} 
      className='stylesDel'>
        {props.name}
    </button>
  );
  
}

export default ButtonDel;