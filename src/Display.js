import React, { Component } from 'react';

class Display extends Component{

  render(){

    return (
      <div>
        <input 
          type="text" 
          value={this.props.sequence}
          placeholder="0"
          style={{ 
            fontSize: 20,
            backgroundColor: "#c7f3ff",
            textAlign: "right",
            width: 152,
            height: 32,
            padding: 2,
          }} />
      </div>
    );
  }
}

export default Display;