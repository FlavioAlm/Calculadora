import React, { Component } from 'react';
import Display from './Display';
import ButtonEqual from './ButtonEqual';
import ButtonOperator from './ButtonOperator';
import ButtonNumber from './ButtonNumber';


class Calculator extends Component {

  constructor(props){
    super(props);
    this.state={
      sequenceInput: '',
      numbers: [],
      operator: '',
      result: 0
    };
    
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSequenceChange = this.handleSequenceChange.bind(this);
    this.handleOperatorChange = this.handleOperatorChange.bind(this);
    this.handleResultChange = this.handleResultChange.bind(this);
  }

  handleNumberChange(props){
    this.setState({numbers: [...this.state.numbers, props]})
  }
  handleSequenceChange(props){
    let input = this.state.sequenceInput;
    this.setState({sequenceInput: input+ props})
  }
  handleOperatorChange(props){
    this.setState({operator: props})
  }
  handleResultChange(props){

    let result = this.state.result;
    let numbers = this.state.numbers;
    let operator = this.state.operator;
    
    if(operator=='+'){
      for(let i = 0; i < numbers.length; i++){
        result += parseInt(numbers[i])
      }
    }

    this.setState({result: result})
    this.setState({sequenceInput: result})
    this.setState({numbers: []})

  }

  render(){
    const sequenceInput = this.state.sequenceInput;
    const numbers = this.state.numbers;
    const operator = this.state.operator;
    const result = this.state.result;

    console.log(`numbers: ${numbers}`);
    console.log(`result: ${result}`);
    console.log(`sequence: ${sequenceInput}`);

    return (
      <div>
        <h1> Calculadora em construção...</h1>
          <ButtonNumber 
            name="1" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="2" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="3" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} /><br/>
          <ButtonNumber 
            name="4" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="5" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="6" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} /><br/>
          <ButtonNumber 
            name="7" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="8" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="9" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} /><br/>
          <ButtonNumber 
            name="0" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonOperator 
            name="+" 
            onOperatorChange={this.handleOperatorChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}/><br/>
          <Display sequence={this.state.sequenceInput}/>
      </div>
    );
  }

}


export default Calculator;
