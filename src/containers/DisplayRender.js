import React from 'react';
import MainDisplay from '../components/mainDisplay/MainDisplay.js';
import SecDisplay from '../components/secDisplay/SecDisplay.js';

const DisplayRender = React.forwardRef( ({sequence, onKeyDown, result}, ref) =>
  <section className="displayRender">
    <SecDisplay
      sequence={sequence}
      onKeyDown={onKeyDown}
      ref={ref}
    />
    <MainDisplay result = {result} onKeyDown={onKeyDown} />
  </section>
)

export default DisplayRender;