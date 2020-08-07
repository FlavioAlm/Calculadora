import React, { Component } from 'react';
import Display from './Display';
import ButtonEqual from './ButtonEqual';
import ButtonOperator from './ButtonOperator';
import ButtonNumber from './ButtonNumber';
import ButtonNumberSpan from './ButtonNumberSpan';
import Del from './Del.js'


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
    this.handleReset = this.handleReset.bind(this);
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
    if(operator=='-'){
      for(let i = 0; i < numbers.length; i++){
        result -= parseInt(numbers[i])
      }
    }
    if(operator=='*'){
      for(let i = 0; i < numbers.length; i++){
        result *= parseInt(numbers[i])
      }
    }
    if(operator=='/'){
      for(let i = 0; i < numbers.length; i++){
        result /= parseInt(numbers[i])
      }
    }

    this.setState({result: result})
    this.setState({sequenceInput: result})
    this.setState({numbers: []})

  }

  handleReset(){
    this.setState({sequenceInput: ''});
    this.setState({numbers: []});
    this.setState({operator: ''});
    this.setState({result: 0});
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
          <ButtonNumberSpan 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonOperator 
            name="+" 
            onOperatorChange={this.handleOperatorChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonOperator 
            name="-" 
            onOperatorChange={this.handleOperatorChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonOperator 
            name="*" 
            onOperatorChange={this.handleOperatorChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonOperator 
            name="/" 
            onOperatorChange={this.handleOperatorChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonEqual 
            name="="
            onResultChange={this.handleResultChange}/><br/>
          <Del 
            name="DEL"
            reset={this.handleReset} /> <br/>
          <Display sequence={this.state.sequenceInput}/>
      </div>
    );
  }

}


export default Calculator;
