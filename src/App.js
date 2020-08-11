import React, { Component } from 'react';
import Calculator from './Calculator.js';

class App extends Component {
 
  render() {
    console.log("key: " + this.props.key);
    return (
      <div>
        <Calculator 
          key={this.props.key} 
          onClick={this.props.onClick}/>
      </div>
    );
  }

}

export default App;