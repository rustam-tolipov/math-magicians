import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setstate] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const btn = (e) => {
    setstate({ ...state, ...calculate(state, e.target.name) });
  };

  return (
    <div className="container">
      <div className="result">
        <div className="show-result">
          {state.total}
          {state.operation}
          {state.next}
        </div>
      </div>

      <div className="keypad">
        <button type="button" name="AC" onClick={btn}>
          AC
        </button>
        <button type="button" name="+/-" onClick={btn}>
          +/-
        </button>
        <button type="button" name="%" onClick={btn}>
          %
        </button>
        <button type="button" className="options" name="÷" onClick={btn}>
          &divide;
        </button>
        <button type="button" name="7" onClick={btn}>
          7
        </button>
        <button type="button" name="8" onClick={btn}>
          8
        </button>
        <button type="button" name="9" onClick={btn}>
          9
        </button>
        <button type="button" className="options" name="x" onClick={btn}>
          &times;
        </button>
        <button type="button" name="4" onClick={btn}>
          4
        </button>
        <button type="button" name="5" onClick={btn}>
          5
        </button>
        <button type="button" name="6" onClick={btn}>
          6
        </button>
        <button type="button" className="options" name="-" onClick={btn}>
          &ndash;
        </button>
        <button type="button" name="1" onClick={btn}>
          1
        </button>
        <button type="button" name="2" onClick={btn}>
          2
        </button>
        <button type="button" name="3" onClick={btn}>
          3
        </button>
        <button type="button" className="options" name="+" onClick={btn}>
          +
        </button>
        <button type="button" className="zero" name="0" onClick={btn}>
          0
        </button>
        <button type="button" name="." onClick={btn}>
          .
        </button>
        <button type="button" className="options" name="=" onClick={btn}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
