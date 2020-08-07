import React, { Component } from 'react';

class ButtonNumber extends Component{

  handleClick(event){
    let number = this.sequence;

    alert("Clicou em: " + event.target.innerText);
    var input = event.target.innerText;

    number.push(input);

    console.log(input);

    document.getElementById("result").innerHTML += input;
    console.log(number);
  };

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }

}

export default ButtonNumber;