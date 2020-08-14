import React, { Component } from 'react';
import Display from '../components/display/Display.js';
import ButtonEqual from '../components/buttonEqual/ButtonEqual.js';
import ButtonOperator from '../components/buttonOperator/ButtonOperator.js';
import ButtonDel from '../components/buttonDel/ButtonDel.js';
import ButtonNumber from '../components/buttonNumber/ButtonNumber.js';
import CalcName from '../components/calcName/CalcName.js';
import './Calculator.css';


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
    
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.useNumberChange = this.useNumberChange.bind(this);
    this.useOperatorChange = this.useOperatorChange.bind(this);
  }

  handleChange() {
  }

  handleNumberChange(props) {
    let input = props.target.innerText;
    this.useNumberChange(input);
  }

  useNumberChange(props) {
    let oldSequence = this.state.sequenceInput;

    if (this.state.firstNumber.length < 5) {
      if(this.state.firstNumber[0]==="0"){
        this.setState({
          firstNumber: props,
        })
      } else {
        this.setState({
          firstNumber: this.state.firstNumber+props
        })
      }
  
      this.setState({sequenceInput: oldSequence + props});
    }
  }

  handleOperatorChange(props) {
    let input = props.target.innerText;
    this.useOperatorChange(input)
  }

  useOperatorChange(newInput) {
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
      case '*':
        result = secondNumber * firstNumber
        break
      case '÷': 
        result = secondNumber / firstNumber
        break
      case '/': 
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

  handleKeyPress(props) {
    var algarism = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"] 
    var operator = ["+" , "-" , "*", "/"] 

    let input = props.key.slice(-1)
    
    let isValidInput = [...algarism, ...operator].includes(input)
    let isValidNumber = algarism.includes(input)

    console.log("Input: " + input)
    console.log("isValidInput: " +  isValidInput)
    console.log("isValidNumber: " +  isValidNumber)

    if (isValidInput) {
      if(isValidNumber){
        this.useNumberChange(input)
      } else {
        this.useOperatorChange(input)
      }
    } else if (props.key === "=" || props.key === "Enter") {
        console.log("ok: " + props.key)
        this.handleResultChange()
    } else {
      alert("Please, enter with a number or an operator")
    }

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

    return (
      <div className="wrapper">
          <CalcName 
            name={"Calculator"} />
          <Display 
            sequence={this.state.sequenceInput}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
          />

          {[7, 8, 9].map(num => (
          <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}
            onKeyPress={this.handleKeyPress}/>
          ))}
          <ButtonDel 
            key="C" 
            name="C"
            onChange={this.handleReset} />

          {[4, 5, 6].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}/>
          ))}
          <ButtonOperator 
            name="-" 
            onChange={this.handleOperatorChange}/>

          {[1, 2, 3].map(num => (
            <ButtonNumber
            key={num} 
            name={num} 
            onChange={this.handleNumberChange}/>
          ))}
          <ButtonOperator 
            name="+" 
            onChange={this.handleOperatorChange}/>

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
            onChange={this.handleResultChange}/>
      </div>
    );
  }

}

export default Calculator;