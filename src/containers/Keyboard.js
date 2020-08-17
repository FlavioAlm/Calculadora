import React from 'react';
import ButtonNumber from '../components/buttonNumber/ButtonNumber.js';


function Keyboard(props){

  let keyboad = props.keyboard;

  let calculatorButtons = keyboad.map((key, id) =>{
    return (
      <ButtonNumber 
        key={id} 
        name={key} 
        onChange={props.onChange} 
      />)
  });

  return (
    <div className="keyboard">
      {calculatorButtons} 
    </div>
  );
  
}

export default Keyboard;