import React, { Component } from 'react';
import Display from './Display';
import ButtonEqual from './ButtonEqual';
import ButtonOperator from './ButtonOperator';
import ButtonDel from './ButtonDel.js'
import ButtonNumber from './ButtonNumber';
import CalcName from './CalcName';
import './myStyles.css';


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state={
      sequenceInput: '',
      firstNumber: "0",
      secondNumber: "0",
      operator: '',
      result: 0,
    };
    
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNumberChange(props) {
    let input = props.target.innerText;
    let oldSequence = this.state.sequenceInput;

    if (this.state.firstNumber.length < 5) {
      if(this.state.firstNumber[0]==="0"){
        this.setState({
          firstNumber: input,
        })
      } else {
        this.setState({
          firstNumber: this.state.firstNumber+input
        })
      }
  
      this.setState({sequenceInput: oldSequence + input});
    }
  }

  handleOperatorChange(props) {
    let newInput = props.target.innerText;
    let oldSequence = this.state.sequenceInput;
    let lastInput = this.state.sequenceInput.slice(-1);
    let restInput = this.state.sequenceInput.slice(0,-1);

    if (this.state.firstNumber === "0" 
        & this.state.secondNumber === "0"){
      this.setState({operator: newInput});
      this.setState({sequenceInput: "0" + newInput});
      this.setState({
        firstNumber: "0",
        secondNumber: this.state.firstNumber,
      });
    } else if (!['+', '-', '×', '÷'].includes(lastInput)) {
      this.setState({operator: newInput});
      this.setState({
        firstNumber: "0",
        secondNumber: this.state.firstNumber,
      });
      this.setState({sequenceInput: oldSequence + newInput});
    } else {
      this.setState({operator: newInput});
      this.setState({sequenceInput: restInput + newInput })
    }
  }

  handleResultChange() {
    let result = 0;
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
      case '×':
        result = secondNumber * firstNumber
        break
      case '÷': 
        result = secondNumber / firstNumber
        break
      default:
          console.log("error!")
    }

    this.setState({result: result})
    this.setState({sequenceInput: result.toString()})
    this.setState({
      firstNumber: result,
    })

  }

  handleReset() {
    this.setState({sequenceInput: ''});
    this.setState({
      firstNumber: "0",
      secondNumber: "0"});
    this.setState({operator: ''});
    this.setState({result: 0});
  }

  render() {

    return (
      <div className>
          <CalcName name={" Calculator"}/>
          <Display 
            sequence={this.state.sequenceInput}/>

          {[7, 8, 9].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}/>
          ))}
          <ButtonDel 
            name="C"
            onClick={this.handleReset} /> 
            <br/>

          {[4, 5, 6].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}/>
          ))}
          <ButtonOperator 
            name="-" 
            onChange={this.handleOperatorChange}/>  <br/>

          {[1, 2, 3].map(num => (
            <ButtonNumber
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}/>
          ))}
          <ButtonOperator 
            name="+" 
            onChange={this.handleOperatorChange}/><br/>


          <ButtonOperator 
            name="×" 
            onChange={this.handleOperatorChange}/>
          <ButtonNumber 
            name="0" 
            onChange={this.handleNumberChange}/>
          <ButtonOperator 
            name="÷" 
            onChange={this.handleOperatorChange}/>
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}/>
      </div>
    );
  }

}

export default Calculator;