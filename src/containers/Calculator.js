import React, { Component } from 'react';
import Display from '../components/display/Display.js';
import Keyboard from './Keyboard.js';
import './Calculator.css';
import safeEval from './utils.js';


class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state={
      sequence:'',
    }
    
    this.keyboardCalculator = ["C", "%", "÷", "⇽", "7", "8", "9", "x", "4", "5", "6", "-",  "1", "2", "3", "+", "+/-", "0", ".", "=" ];

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(props) {
    let input = props.key
    this.handleChange(input)
    console.log("input: " + input)
  }

  handleClick(props){
    let input = props.target.innerText;
    this.handleChange(input)
  }

  handleChange(props) {
    console.log("start handle: " + this.state.sequence);
    let oldSequence = this.state.sequence;
    let newSequence = '';

    if (props === "=" || props === "Enter") {
      newSequence = safeEval(oldSequence);
    } else if (props === "C") {
      newSequence = '';
    } else if (props === "⇽") {
      console.log("oldSeq in <-: " + oldSequence)
      newSequence = oldSequence.slice(0, -1);
      console.log("newSeq in <-: " + newSequence)
    } else if (props === "+/-") {
      let oposite = (-1)*(parseInt(oldSequence));
      newSequence = oposite.toString();
    } else { 
      newSequence = oldSequence + props;  
    }

    this.setState({sequence: newSequence});
    console.log("end handle: " + this.state.sequence);
  }

  render(){

    return (
      <div className="calculator">
          <Display
            className="calc display" 
            sequence={this.state.sequence}
            onKeyPress={this.handleKeyPress}
            onChange={ null }
          />
          <Keyboard
            className="keyboard"  
            keyboard={this.keyboardCalculator}         
            onChange={this.handleClick}  
          />
      </div>
    );
  }

}

export default Calculator;