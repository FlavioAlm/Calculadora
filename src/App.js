import React from 'react';

var conta = "";

const Button = (props) => {

  function handleClick(event){
    alert("Clicou em: " + event.target.innerText);
    conta += (event.target.innerText);

    console.log(conta);

    document.getElementById("result").innerHTML = conta.split();
  };

  return (
    <button onClick={handleClick}>{props.name}{conta}</button>
  );
}

const Result = () => {

  return ( 
    <textarea id="result"></textarea>
  );
}

function App() {
  return (
    <div>
      <h1>Calculadora em construção ...</h1>
        <Button name="0" /><br/>
        <Button name="1" /><br/>
        <Button name="+" /><br/>
        <Button name="=" /><br/>
        <Result />
    </div>
  );
}

export default App;
