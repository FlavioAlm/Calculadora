import React, { Component } from 'react';
import ButtonNumber from './ButtonNumber';

class ButtonNumberSpan extends Component{


  render(){
    return (
      <div>
        <ButtonNumber 
          name="1" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="2" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="3" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} /><br/>
        <ButtonNumber 
          name="4" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="5" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="6" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} /><br/>
        <ButtonNumber 
          name="7" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="8" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
        <ButtonNumber 
          name="9" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} /><br/>
        <ButtonNumber 
          name="0" 
          onNumberChange={this.props.onNumberChange}
          onSequenceChange={this.props.onSequenceChange} />
      </div>  
    );
  }
}

export default ButtonNumberSpan;