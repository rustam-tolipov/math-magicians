import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.btn = this.btn.bind(this);
  }

  btn(e) {
    this.setState((state) => calculate(state, e.target.name));
  }

  render() {
    const { total, operation, next } = this.state;

    return (
      <div className="container">
        <div className="result">
          <div className="show-result">
            {total}
            {operation}
            {next}
          </div>
        </div>

        <div className="keypad">
          <button type="button" name="AC" onClick={this.btn}>
            AC
          </button>
          <button type="button" name="+/-" onClick={this.btn}>
            +/-
          </button>
          <button type="button" name="%" onClick={this.btn}>
            %
          </button>
          <button type="button" className="options" name="÷" onClick={this.btn}>
            &divide;
          </button>
          <button type="button" name="7" onClick={this.btn}>
            7
          </button>
          <button type="button" name="8" onClick={this.btn}>
            8
          </button>
          <button type="button" name="9" onClick={this.btn}>
            9
          </button>
          <button type="button" className="options" name="x" onClick={this.btn}>
            &times;
          </button>
          <button type="button" name="4" onClick={this.btn}>
            4
          </button>
          <button type="button" name="5" onClick={this.btn}>
            5
          </button>
          <button type="button" name="6" onClick={this.btn}>
            6
          </button>
          <button type="button" className="options" name="-" onClick={this.btn}>
            &ndash;
          </button>
          <button type="button" name="1" onClick={this.btn}>
            1
          </button>
          <button type="button" name="2" onClick={this.btn}>
            2
          </button>
          <button type="button" name="3" onClick={this.btn}>
            3
          </button>
          <button type="button" className="options" name="+" onClick={this.btn}>
            +
          </button>
          <button type="button" className="zero" name="0" onClick={this.btn}>
            0
          </button>
          <button type="button" name="." onClick={this.btn}>
            .
          </button>
          <button type="button" className="options" name="=" onClick={this.btn}>
            =
          </button>
        </div>
      </div>
    );
  }
}
