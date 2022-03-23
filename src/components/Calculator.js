import React, { Component } from 'react';
import Button from './ButtonSkeleton';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="calc-container">
        <li className="calc-surface">0</li>
        <li className="calc-board">
          <Button buttons={digits} />
        </li>
        <Button buttons={operators} />
      </ul>
    );
  }
}

export default Calculator;
