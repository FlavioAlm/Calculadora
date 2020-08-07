import React, { Component } from 'react';

class Display extends Component{

  constructor(props) {
    super(props);
  }

  render(){

    let sequence = this.props.sequence;
    console.log(sequence);

    return (
      <textarea value={this.props.sequence} />
    );
  }
}


class ButtonEqual extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    alert("Clicou em: " + e.target.innerText);
    var input = (e.target.innerText);
    console.log(input);

    this.props.onResultChange(e.target.innerText);
  };

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }
}


class ButtonOperator extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    alert("Clicou em: " + e.target.innerText);
    var input = e.target.innerText;

    console.log(input);

    this.props.onOperatorChange(e.target.innerText);
    this.props.onSequenceChange(e.target.innerText);
  };

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }

}


class ButtonNumber extends Component{

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){

    alert("Clicou em: " + e.target.innerText);
    var input = e.target.innerText;

    console.log(input);

    this.props.onNumberChange(e.target.innerText);
    this.props.onSequenceChange(e.target.innerText);
  };

  render(){
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    );
  }

}


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
            name="0" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} />
          <ButtonNumber 
            name="1" 
            onNumberChange={this.handleNumberChange}
            onSequenceChange={this.handleSequenceChange} /><br/>
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
