import React from 'react';
import operator from './ButtonOperator';
import numbers from './ButtonNumber';

var resultado = 0;

const ButtonEqual = (props) => {

  function handleClick(event){
    console.log(numbers);

    alert("Clicou em: " + event.target.innerText);
    var input = (event.target.innerText);
    console.log(input);

    console.log(numbers);
    resultado = numbers[0]+numbers[1];

/*     if(operator === "+"){
      for(let i=0; i<numbers.length; i++){
        resultado += parseInt(numbers[i]);
        console.log(resultado)
      }
    } */

    document.getElementById("result").innerHTML = resultado;
  };

  return (
    <button onClick={handleClick}>{props.name}</button>
  );
}

export default ButtonEqual;