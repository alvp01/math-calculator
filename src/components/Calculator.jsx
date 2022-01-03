import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-body">
        <div className="screen">0</div>
        <div className="keyboard">
          <div className="row">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn">÷</button>
          </div>
          <div className="row">
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn">x</button>
          </div>
          <div className="row">
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn">-</button>
          </div>
          <div className="row">
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn">+</button>
          </div>
          <div className="row last-row">
            <button type="button" className="btn">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
