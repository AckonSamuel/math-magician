import React, { useState } from 'react';
import calculate from '../logic/calculate';

const operators = ['÷', 'x', '-', '+', '='];
const digits = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];

const Calculator = () => {
  const [obj, calcObj] = useState({
    next: '',
    total: '',
    operation: '',
  });

  // btnClick = (btn) => {
  //   this.setState((state) => calculate(
  //     {
  //       next: state.next,
  //       total: state.total,
  //       operation: state.operation,
  //     },
  //     btn,
  //   ));
  // }

  const btnClick = (btn) => {
    const { total, next, operation } = calculate(obj, btn);
    if (next === null && total === null) {
      calcObj({ next, total: '', operation });
    } else {
      calcObj({ next, total, operation });
    }
  };

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
};

export default Calculator;
