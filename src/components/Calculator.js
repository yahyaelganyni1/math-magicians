/* eslint-disable */
import React, { Component } from 'react';
import Button from './Button';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-container">
        <input className="answer" disabled="disabled" value="0"></input>
        <div className="numbers-container">
          <Button Addclass="primary" buttonName="AC" />
          <Button Addclass="primary" buttonName="+/-" />
          <Button Addclass="primary" buttonName="%" />
          <Button Addclass="primary" buttonName="9" />
          <Button Addclass="primary" buttonName="8" />
          <Button Addclass="primary" buttonName="7" />
          <Button Addclass="primary" buttonName="6" />
          <Button Addclass="primary" buttonName="5" />
          <Button Addclass="primary" buttonName="4" />
          <Button Addclass="primary" buttonName="3" />
          <Button Addclass="primary" buttonName="2" />
          <Button Addclass="primary" buttonName="1" />
          <Button Addclass="primary zero" buttonName="0" />
          <Button Addclass="primary" buttonName="." />
          <div className="secondary-div">
            <Button Addclass="secondary" buttonName="÷" />
            <Button Addclass="secondary" buttonName="×" />
            <Button Addclass="secondary" buttonName="-" />
            <Button Addclass="secondary" buttonName="+" />
            <Button Addclass="secondary" buttonName="=" />
          </div>
        </div>
      </div>
    );
  }
}
