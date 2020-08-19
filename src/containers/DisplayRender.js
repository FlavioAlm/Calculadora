import React from 'react';
import MainDisplay from '../components/mainDisplay/MainDisplay.js';
import SecDisplay from '../components/secDisplay/SecDisplay.js';

function DisplayRender(props){
  return (
    <div className="displayRender">
      <SecDisplay
        sequence={props.sequence}
        onKeyDown={props.onKeyDown}
      />
      <MainDisplay
        result = {props.result}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );

}

export default DisplayRender;