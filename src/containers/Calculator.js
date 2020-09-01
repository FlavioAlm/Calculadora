import React, { Component, createRef } from 'react';
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
    };

    this.inputRef = createRef();
    this.keyboardCalculator = ["C", "%", "÷", "⇽", "7", "8", "9", "×", "4", "5", "6", "-",  "1", "2", "3", "+", "+/-", "0", ".", "=" ];

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleKeyDown({key}) {
    this.handleChange(key)
  }

  handleClick({target}){
    this.handleChange(target.innerText)
  }

  handleChange(props) {
    const { sequence, result } = this.state
    const [oldSeq, oldRes] = [sequence, result] 
    const [newSeq, newRes] = calculateSeq(oldSeq, props, oldRes);
    this.setState({sequence: newSeq, result: newRes});
  }

  render(){
    const { sequence, result} = this.state
    const { handleKeyDown, inputRef, keyboardCalculator, handleClick} = this

    return (
      <main className="calculator">
          <DisplayRender
            sequence = {sequence}
            result = {result}
            onKeyDown = {handleKeyDown}
            ref={inputRef}
          />
          <KeyboardRender 
            keyboard = {keyboardCalculator}
            onChange = {handleClick}  
          />
      </main>
    );
  }

}

export default Calculator;