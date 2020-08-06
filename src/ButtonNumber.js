import React from 'react';

const ButtonNumber = (props) => {
  
  const [number, setNumber] = React.useState([]) ;

  function handleClick(event){
    alert("Clicou em: " + event.target.innerText);
    var input = (event.target.innerText);

    setNumber(number.push(input));

    console.log(input);

    document.getElementById("result").innerHTML += input;
    console.log(number);
  };

  return (
    <button onClick={handleClick}>{props.name}</button>
  );
}

export default ButtonNumber;