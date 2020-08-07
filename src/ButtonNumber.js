import React, { Component } from 'react';

class ButtonNumber extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    alert("Clicou em: " + e.target.innerText);
    var input = e.target.innerText;

    console.log(input);

    this.props.onNumberChange(e.target.innerText);
    this.props.onSequenceChange(e.target.innerText);
  };

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }

}

export default ButtonNumber;