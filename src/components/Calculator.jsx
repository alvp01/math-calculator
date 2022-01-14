import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    const newState = calculate(calcObj, btnName);
    setCalcObj(newState);
  };

  const displayValues = ({ total, next, operation }) => {
    if (total && !next && !operation) return `${total}`;
    if (!total && next && !operation) return `${next}`;
    if (total && !next && operation) return `${total} ${operation}`;
    if (total && next && operation) return `${next}`;
    return '0';
  };

  return (
    <div className="calculator-body">
      <div className="screen" data-testid="result">
        { displayValues(calcObj) }
      </div>
      <div className="keyboard">
        <div className="row">
          <button type="button" className="btn" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" className="btn" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" className="btn" onClick={() => handleClick('%')}>%</button>
          <button type="button" className="btn" onClick={() => handleClick('÷')}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={() => handleClick('7')}>7</button>
          <button type="button" className="btn" onClick={() => handleClick('8')}>8</button>
          <button type="button" className="btn" onClick={() => handleClick('9')}>9</button>
          <button type="button" className="btn" onClick={() => handleClick('x')}>x</button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={() => handleClick('4')}>4</button>
          <button type="button" className="btn" onClick={() => handleClick('5')}>5</button>
          <button type="button" className="btn" onClick={() => handleClick('6')}>6</button>
          <button type="button" className="btn" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button type="button" className="btn" onClick={() => handleClick('1')} key='1'>1</button>
          <button type="button" className="btn" onClick={() => handleClick('2')}>2</button>
          <button type="button" className="btn" onClick={() => handleClick('3')}>3</button>
          <button type="button" className="btn" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row last-row">
          <button type="button" className="btn" onClick={() => handleClick('0')}>0</button>
          <button type="button" className="btn" onClick={() => handleClick('.')}>.</button>
          <button type="button" className="btn" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
