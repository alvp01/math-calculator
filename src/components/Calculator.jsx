import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.displayValues = this.displayValues.bind(this);
  }

  handleClick(btnName) {
    const newState = calculate(this.state, btnName);
    this.setState(() => ({
      total: newState.total,
      next: newState.next,
      operation: newState.operation,
    }));
  }

  displayValues() {
    const { total, next, operation } = this.state;
    if (total && !next && !operation) return `${total}`;
    if (!total && next && !operation) return `${next}`;
    if (total && !next && operation) return `${total} ${operation}`;
    if (total && next && operation) return `${next}`;
    return '0';
  }

  render() {
    return (
      <div className="calculator-body">
        <div className="screen">{this.displayValues()}</div>
        <div className="keyboard">
          <div className="row">
            <button type="button" className="btn" onClick={() => this.handleClick('AC')}>AC</button>
            <button type="button" className="btn" onClick={() => this.handleClick('+/-')}>+/-</button>
            <button type="button" className="btn" onClick={() => this.handleClick('%')}>%</button>
            <button type="button" className="btn" onClick={() => this.handleClick('÷')}>÷</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => this.handleClick('7')}>7</button>
            <button type="button" className="btn" onClick={() => this.handleClick('8')}>8</button>
            <button type="button" className="btn" onClick={() => this.handleClick('9')}>9</button>
            <button type="button" className="btn" onClick={() => this.handleClick('x')}>x</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => this.handleClick('4')}>4</button>
            <button type="button" className="btn" onClick={() => this.handleClick('5')}>5</button>
            <button type="button" className="btn" onClick={() => this.handleClick('6')}>6</button>
            <button type="button" className="btn" onClick={() => this.handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button type="button" className="btn" onClick={() => this.handleClick('1')}>1</button>
            <button type="button" className="btn" onClick={() => this.handleClick('2')}>2</button>
            <button type="button" className="btn" onClick={() => this.handleClick('3')}>3</button>
            <button type="button" className="btn" onClick={() => this.handleClick('+')}>+</button>
          </div>
          <div className="row last-row">
            <button type="button" className="btn" onClick={() => this.handleClick('0')}>0</button>
            <button type="button" className="btn" onClick={() => this.handleClick('.')}>.</button>
            <button type="button" className="btn" onClick={() => this.handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
