import React, { Component } from 'react';
import Display from './Display';
import ButtonEqual from './ButtonEqual';
import ButtonOperator from './ButtonOperator';
import ButtonDel from './ButtonDel.js'
import ButtonNumber from './ButtonNumber';

const stylesOperator = {
  width: 40, 
  height: 40, 
  backgroundColor: '#f2b6d8',
};

const stylesNumber = {
  width: 40, 
  height: 40, 
  backgroundColor: 'lightblue',
};

const stylesDel = {
  width: 40, 
  height: 40, 
  backgroundColor: 'orange',
};

const stylesDisplay = {
  fontSize: 20,
  backgroundColor: "#c7f3ff",
  textAlign: "right",
  width: 152,
  height: 32,
  padding: 2,
}

class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={
      sequenceInput: '',
      firstNumber: 0,
      secondNumber: 0,
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
    //let input = props.target.innerText;
    let input = props

    this.setState({
      firstNumber: this.state.secondNumber,
      secondNumber: parseInt(input),
    });
    console.log(this.state.firstNumber)

    let oldSequence = this.state.sequenceInput;
    this.setState({sequenceInput: oldSequence + input});
  }

  handleOperatorChange(props){

    let input = props
    //let input = props.target.innerText;
    this.setState({operator: input});

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
        result = firstNumber + secondNumber
        break
      case '-':
        result = firstNumber - secondNumber
        break
      case 'x':
        result = firstNumber * secondNumber
        break
      case '/': 
        result = firstNumber / secondNumber
        break
      default:
          console.log("error!")
    }

    console.log("result: "+result);

    this.setState({result: result})
    this.setState({sequenceInput: result})
    this.setState({
      firstNumber: this.state.secondNumber,
      secondNumber: result,
    })

  }

  handleReset(){
    this.setState({sequenceInput: ''});
    this.setState({
      firstNumber: 0,
      secondNumber: 0});
    this.setState({operator: ''});
    this.setState({result: 0});
  }

  render(){
    const sequenceInput = this.state.sequenceInput;
    const numbers = [this.state.firstNumber, this.state.secondNumber];
    const result = this.state.result;

    console.log(`numbers: ${numbers[0]}${numbers[1]}`);
    console.log(`result: ${result}`);
    console.log(`sequence: ${sequenceInput}`);

    return (
      <div>
        <h1> Calculator</h1>
          <Display 
            sequence={this.state.sequenceInput}
            style={stylesDisplay}/>
          {[1, 2, 3].map(num => (
            <ButtonNumber
            key={num} 
            name={num} 
            onChange={this.handleChange}
            style={stylesNumber}/>
          ))}
          <ButtonDel 
            name="C"
            reset={this.handleReset} 
            style={stylesDel}/> <br/>

          {[4, 5, 6].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleChange}
            style={stylesNumber}/>
          ))}
          <ButtonOperator 
            name="-" 
            onChange={this.handleChange}
            style={stylesOperator}/>  <br/>

          {[7, 8, 9].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleChange}
            style={stylesNumber}/>
          ))}
          <ButtonOperator 
            name="+" 
            onChange={this.handleChange}
            style={stylesOperator}/><br/>

          <ButtonNumber 
            name="0" 
            onChange={this.handleChange}
            style={stylesNumber}/>
          {["x", "/"].map(oper => (
          <ButtonOperator 
            name={oper} 
            onChange={this.handleChange}
            style={stylesOperator}/>
          ))} 
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}
            style={stylesOperator}/>
      </div>
    );
  }

}


export default Calculator;
