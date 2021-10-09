import React from 'react';
import './CalculatorPage.css';
import Calculator from '../Calculator';

function CalculatorPage() {
  return (
    <div className="calculator__page">
      <h1 className="title">Let&#39;s do some math 👨‍🎓👩‍🎓!</h1>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
