import React, { Component } from 'react';
import Display from './Display';
import ButtonEqual from './ButtonEqual';
import ButtonOperator from './ButtonOperator';
import ButtonDel from './ButtonDel.js'
import ButtonNumber from './ButtonNumber';
import './myStyles.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state={
      sequenceInput: '',
      firstNumber: "0",
      secondNumber: "0",
      operator: '',
      result: 0,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(props){
    let input = props.target.innerText;

    var operatorsList = ["+", "-", "x", "/"];
    var numbersList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if(operatorsList.includes(input)) {
      this.handleOperatorChange(input)
    }
    if(numbersList.includes(parseInt(input))) {
      this.handleNumberChange(input)
    }

  }

  handleNumberChange(props) {
    let input = props

    console.log("firstNumber: " + this.state.firstNumber[0])
    if(this.state.firstNumber[0]==="0"){
      this.setState({
        firstNumber: input,
      })
    } else {
      this.setState({
        firstNumber: this.state.firstNumber+input
      })
    }
    console.log("firstNumber: " + this.state.firstNumber)

    let oldSequence = this.state.sequenceInput;
    this.setState({sequenceInput: oldSequence + input});
  }

  handleOperatorChange(props){

    let input = props
    this.setState({operator: input});

    this.setState({
      firstNumber: "0",
      secondNumber: this.state.firstNumber,
    });

    let oldSequence = this.state.sequenceInput;
    this.setState({sequenceInput: oldSequence + input});
    console.log("operator: "+this.state.operator);
  }

  handleResultChange(props){
    let result = this.state.result;
    let firstNumber = parseInt(this.state.firstNumber);
    let secondNumber = parseInt(this.state.secondNumber);
    let operator = this.state.operator;
    
    switch(operator){
      case '+':
        result = secondNumber + firstNumber
        break
      case '-':
        result = secondNumber - firstNumber
        break
      case 'x':
        result = secondNumber * firstNumber
        break
      case '/': 
        result = secondNumber / firstNumber
        break
      default:
          console.log("error!")
    }

    console.log("result: "+result);

    this.setState({result: result})
    this.setState({sequenceInput: result})
    this.setState({
      firstNumber: result,
    })

  }

  handleReset(){
    this.setState({sequenceInput: ''});
    this.setState({
      firstNumber: "0",
      secondNumber: "0"});
    this.setState({operator: ''});
    this.setState({result: 0});
  }

  render(){
    const sequenceInput = this.state.sequenceInput;
    const numbers = [this.state.firstNumber, this.state.secondNumber];
    const result = this.state.result;

    console.log(`number0: ${numbers[0]} number1: ${numbers[1]}`);
    console.log(`result: ${result}`);
    console.log(`sequence: ${sequenceInput}`);

    return (
      <div>
          <Display 
            sequence={this.state.sequenceInput}/>
          {[1, 2, 3].map(num => (
            <ButtonNumber
            key={num} 
            name={num} 
            onChange={this.handleChange}/>
          ))}
          <ButtonDel 
            name="C"
            onClick={this.props.onClick} /> <br/>

          {[4, 5, 6].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleChange}/>
          ))}
          <ButtonOperator 
            name="-" 
            onChange={this.handleChange}/>  <br/>

          {[7, 8, 9].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleChange}/>
          ))}
          <ButtonOperator 
            name="+" 
            onChange={this.handleChange}/><br/>

          <ButtonNumber 
            name="0" 
            onChange={this.handleChange}/>
          {["x", "/"].map(oper => (
          <ButtonOperator
            key={oper} 
            name={oper} 
            onChange={this.handleChange}/>
          ))} 
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}/>
      </div>
    );
  }

}

export default Calculator;