import React, { Component } from 'react';
import Display from '../components/display/Display.js';
import ButtonEqual from '../components/buttonEqual/ButtonEqual.js';
import ButtonOperator from '../components/buttonOperator/ButtonOperator.js';
import ButtonDel from '../components/buttonDel/ButtonDel.js';
import ButtonNumber from '../components/buttonNumber/ButtonNumber.js';
import CalcName from '../components/calcName/CalcName.js';
import './Calculator.css';
import safeEval from './utils.js';


class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state={
      sequence:'',
    }

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
    let oldSequence = this.state.sequence;
    let newSequence = '';

    if (props === "=" || props === "Enter") {
      newSequence = safeEval(oldSequence);
    } else if (props === "C") {
      newSequence = '';
    } else { 
      newSequence = oldSequence + props;  
    }

    this.setState({sequence: newSequence});
  }

  render(){

    return (
      <div className="wrapper">
          <CalcName 
            name={"Calculator"} />
          <Display 
            sequence={this.state.sequence}
            onKeyPress={this.handleKeyPress}
            onChange={ null }
          />

          {[7, 8, 9].map(num => (
          <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleClick}/>
          ))}
          <ButtonDel 
            key="C" 
            name="C"
            onChange={this.handleClick} />

          {[4, 5, 6].map(num => (
            <ButtonNumber 
            key={num} 
            name={num} 
            onChange={this.handleClick}/>
          ))}
          <ButtonOperator 
            name="-" 
            onChange={this.handleClick}/>

          {[1, 2, 3].map(num => (
            <ButtonNumber
            key={num} 
            name={num} 
            onChange={this.handleClick}/>
          ))}
          <ButtonOperator 
            name="+" 
            onChange={this.handleClick}/>

          <ButtonOperator 
            name="×" 
            onChange={this.handleClick}/>
          <ButtonNumber 
            name="0" 
            onChange={this.handleClick}/>
          <ButtonOperator 
            name="÷" 
            onChange={this.handleClick}/>
          <ButtonEqual 
            name="="
            onChange={this.handleClick}/>
      </div>
    );
  }

}

export default Calculator;