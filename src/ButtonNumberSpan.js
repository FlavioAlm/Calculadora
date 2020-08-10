import React, { Component } from 'react';
import ButtonNumber from './ButtonNumber';

class ButtonNumberSpan extends Component{

  render(){
    return (
      <div>
        <ButtonNumber 
          name="1" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} 
          style={this.props.style}/>
        <ButtonNumber 
          name="2" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} 
          style={this.props.style}/>
        <ButtonNumber 
          name="3" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} 
          style={this.props.style}/> <br/>


      </div>  
    );
  }
}

export default ButtonNumberSpan;