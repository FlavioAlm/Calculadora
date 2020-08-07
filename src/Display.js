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

export default Display;