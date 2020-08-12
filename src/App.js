import React, { Component } from 'react';
import Calculator from './Calculator.js';

class App extends Component {
 
  render() {
    return (
      <div>
        <Calculator  
          onClick={this.props.onClick}/>
      </div>
    );
  }

}

export default App;