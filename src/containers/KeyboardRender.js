import React from 'react';
import Button from '../components/button/Button.js';


function KeyboardRender(props){

  let keyboad = props.keyboard;

  let calculatorButtons = keyboad.map((key, id) =>{
    return (
      <Button 
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

export default KeyboardRender;