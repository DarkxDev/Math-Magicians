import React, { useState } from 'react';
import Buttons from './Buttons';
import Display from './Display';
import calculate from '../logic/calculate';

const CalculatorLayout = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="calculator">
      <Display value={next || total || '0'} />
      <Buttons handleClick={handleClick} />
    </div>
  );
};

export default CalculatorLayout;
