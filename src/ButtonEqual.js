import React, { Component } from 'react';

class ButtonEqual extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    var input = (e.target.innerText);
    console.log(input);

    this.props.onResultChange(e.target.innerText);
  };

  render(){
    return (
      <button 
      onClick={this.handleClick}
      style={this.props.style}>{this.props.name}</button>
    );
  }
}

export default ButtonEqual;