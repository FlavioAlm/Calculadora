import React from 'react';
import Button from '../components/button/Button.js';

function KeyboardRender({keyboard, onChange}){
  const calculatorButtons = keyboard.map((key, id) =>
    <Button 
      key={id} 
      name={key} 
      onChange={onChange} 
    />
  )

  return (
    <section className="keyboardRender">
      {calculatorButtons} 
    </section>
  );
  
}

export default KeyboardRender;