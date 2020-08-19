import React, { Component } from 'react';
import KeyboardRender from './KeyboardRender.js';
import DisplayRender from './DisplayRender.js';
import calculateSeq from '../utils.js';
import './Calculator.css';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state={
      sequence:'',
      result: ''
    }
    this.keyboardCalculator = ["C", "%", "÷", "⇽", "7", "8", "9", "×", "4", "5", "6", "-",  "1", "2", "3", "+", "+/-", "0", ".", "=" ];

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyDown(props) {
    let input = props.key
    this.handleChange(input)
  }

  handleClick(props){
    let input = props.target.innerText;
    this.handleChange(input)
  }

  handleChange(props) {
    let oldSeq = this.state.sequence;
    let oldRes = this.state.result;
    let [newSeq, newRes] = calculateSeq(oldSeq, props, oldRes);
    this.setState({sequence: newSeq});
    this.setState({result: newRes});
  }

  render(){

    return (
      <div className="calculator">
          <DisplayRender
            sequence = {this.state.sequence}
            result = {this.state.result}
            onKeyDown = {this.handleKeyDown}
          />
          <KeyboardRender 
            keyboard = {this.keyboardCalculator}
            onChange = {this.handleClick}  
          />
      </div>
    );
  }

}

export default Calculator;