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

  const btnClick = (btn) => {
    const { total, next, operation } = calculate(obj, btn);
    if (next === null && total === null) {
      calcObj({ next, total: '', operation });
    } else {
      calcObj({ next, total, operation });
    }
  };

  return (
    <div className="root-calc">
      <h1>
        Let us do some Maths
        {' '}
        <br />
        {'>>>'}
      </h1>
      <div className="calc-container">
        <div className="calc-input">{obj.next || obj.total || '0'}</div>
        <div className="calc-keys">
          <div className="digits">
            {digits.map((btn) => <button onClick={() => btnClick(btn)} type="button" key={btn}>{btn}</button>)}
          </div>
          <div className="operators">
            {operators.map((btn) => (
              <button onClick={() => btnClick(btn)} type="button" key={btn}>
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
