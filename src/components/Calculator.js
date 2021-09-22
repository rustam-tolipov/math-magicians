import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="keypad">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="options">
            &divide;
          </button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="options">
            &times;
          </button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="options">
            &ndash;
          </button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="options">
            +
          </button>
          <button type="button" className="zero">
            0
          </button>
          <button type="button">.</button>
          <button type="button" className="options">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
