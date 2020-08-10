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
    
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleNumberChange(props){
    let input = props.target.innerText;

    this.setState({
      firstNumber: this.state.secondNumber,
      secondNumber: parseInt(input),
    });
    console.log(this.state.firstNumber)

    let oldSequence = this.state.sequenceInput;
    this.setState({sequenceInput: oldSequence + input});
    console.log("operator: "+this.state.operator);
  }

  handleOperatorChange(props){

    let input = props.target.innerText;
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
          <ButtonNumber 
            name="1" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="2" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="3" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonDel 
            name="C"
            reset={this.handleReset} 
            style={stylesDel}/> <br/>

          <ButtonNumber 
            name="4" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="5" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="6" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonOperator 
            name="-" 
            onOperatorChange={this.handleOperatorChange}
            style={stylesOperator}/>  <br/>
            
          <ButtonNumber 
            name="7" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="8" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonNumber 
            name="9" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonOperator 
            name="+" 
            onOperatorChange={this.handleOperatorChange}
            style={stylesOperator}/><br/>

          <ButtonNumber 
            name="0" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} 
            style={stylesNumber}/>
          <ButtonOperator 
            name="x" 
            onOperatorChange={this.handleOperatorChange}
            style={stylesOperator}/> 
          <ButtonOperator 
            name="/" 
            onOperatorChange={this.handleOperatorChange}
            style={stylesOperator}/>
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}
            style={stylesOperator}/>
      </div>
    );
  }

}


export default Calculator;
