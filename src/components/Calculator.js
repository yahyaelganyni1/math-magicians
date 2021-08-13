/* eslint-disable */
import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onChange = () => {};

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.outerText) });
  };
  const { next, total } = state;
  return (
    <div className="calculator-container">
      <input
        type="text"
        value={next || total || '0'}
        className="answer"
        disabled="disabled"
        onChange={onChange}
      ></input>
      <div className="numbers-container">
        <Button Addclass="primary" buttonName="AC" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="+/-" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="%" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="7" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="8" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="9" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="4" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="5" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="6" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="1" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="2" handleClick={handleClick} />
        <Button Addclass="primary" buttonName="3" handleClick={handleClick} />
        <Button
          Addclass="primary zero"
          buttonName="0"
          handleClick={handleClick}
        />
        <Button Addclass="primary" buttonName="." handleClick={handleClick} />
        <div className="secondary-div">
          <Button
            Addclass="secondary"
            buttonName="÷"
            handleClick={handleClick}
          />
          <Button
            Addclass="secondary"
            buttonName="x"
            handleClick={handleClick}
          />
          <Button
            Addclass="secondary"
            buttonName="-"
            handleClick={handleClick}
          />
          <Button
            Addclass="secondary"
            buttonName="+"
            handleClick={handleClick}
          />
          <Button
            Addclass="secondary"
            buttonName="="
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
