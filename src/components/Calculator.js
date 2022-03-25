import React, { Component } from 'react';
import calculate from '../logic/calculate';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next: '',
      total: '',
      operation: '',
    };
  }

  btnClick = (btn) => {
    this.setState((state) => calculate(
      {
        next: state.next,
        total: state.total,
        operation: state.operation,
      },
      btn,
    ));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-input">{next || total || '0'}</div>
        <div className="calc-keys">
          <div className="digits">
            {digits.map((btn) => <button onClick={() => this.btnClick(btn)} type="button" key={btn}>{btn}</button>)}
          </div>
          <div className="operators">
            {operators.map((btn) => (
              <button onClick={() => this.btnClick(btn)} type="button" key={btn}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
