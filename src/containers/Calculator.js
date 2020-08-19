import React, { Component } from 'react';
import Display from '../components/display/Display.js';
import KeyboardRender from './KeyboardRender.js';
import './Calculator.css';
import calculateSeq from '../utils.js';


class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state={
      sequence:'',
    }
    
    this.keyboardCalculator = ["C", "%", "÷", "⇽", "7", "8", "9", "×", "4", "5", "6", "-",  "1", "2", "3", "+", "+/-", "0", ".", "=" ];

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(props) {
    let input = props.key
    this.handleChange(input)
  }

  handleClick(props){
    let input = props.target.innerText;
    this.handleChange(input)
  }

  handleChange(props) {
    let oldSeq = this.state.sequence;

    let newSeq = calculateSeq(oldSeq, props);
    this.setState({sequence: newSeq});
  }

  render(){

    return (
      <div className="calculator">
          <Display
            className="display" 
            sequence={this.state.sequence}
            onKeyDown={this.handleKeyPress}
          />
          <KeyboardRender
            className="keyboard"  
            keyboard={this.keyboardCalculator}
            onChange={this.handleClick}  
          />
      </div>
    );
  }

}

export default Calculator;