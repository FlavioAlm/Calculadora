import React from 'react';
import ButtonNumber from './ButtonNumber';
import ButtonOperator from './ButtonOperator';
import ButtonEqual from './ButtonEqual';
import Result from './Result';

function App() {
  return (
    <div>
      <h1> Calculadora em construção...</h1>
        <ul><ButtonNumber name="0" /></ul>
        <ul><ButtonNumber name="1" /></ul>
        <ul><ButtonOperator name="+" /></ul>
        <ul><ButtonEqual name="=" /><br/></ul>
        <ul><Result /></ul>
    </div>
  );
}

export default App;
