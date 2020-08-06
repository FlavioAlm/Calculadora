import React from 'react';

var operator = "";

const ButtonOperator = (props) => {
  function handleClick(event){
    alert("Clicou em: " + event.target.innerText);
    let input = (event.target.innerText);
    operator = (event.target.innerText);

    console.log(input);

    document.getElementById("result").innerHTML += input;
  };

  return (
    <button onClick={handleClick}>{props.name}</button>
  );
}

export default ButtonOperator;