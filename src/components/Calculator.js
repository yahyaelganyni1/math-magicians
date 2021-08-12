/* eslint-disable */
import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
      operation: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ next: e.target.value });
  }

  handleClick(e) {
    if (this.isNumber(e.target.outerText)) {
      console.log('num');
      this.setState({ next: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
    }

    if (
      e.target.outerText === '+' ||
      e.target.outerText === '-' ||
      e.target.outerText === 'x' ||
      e.target.outerText === '÷'
    ) {
      this.setState({ operation: e.target.outerText });
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ next: res.next });
      this.setState({ total: res.total });
    }

    if (e.target.outerText === '=') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.total });
    }
    if (e.target.outerText === '.') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      if (Object.entries(res).length !== 0) {
        this.setState({ ...res });
        this.setState({ next: res.next });
      }
    }
    if (e.target.outerText === 'AC') {
      const reset = { total: 0, next: 0, operation: null };
      this.setState({ ...reset });
    }
    if (e.target.outerText === '+/-') {
      const obj = this.state;
      const res = calculate(obj, e.target.outerText);
      this.setState({ ...res });
      this.setState({ next: res.next });
    }
    if (e.target.outerText === '%') {
      const obj = this.state;
      this.setState({ next: parseFloat(obj.next / 100).toString() });
    }
  }

  isNumber = (item) => !!item.match(/[0-9]+/);

  render() {
    return (
      <div className="calculator-container">
        <input
          type="text"
          value={this.state.next}
          className="answer"
          disabled="disabled"
          onChange={this.handleChange}
        ></input>
        <div className="numbers-container">
          <Button
            Addclass="primary"
            buttonName="AC"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="+/-"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="%"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="7"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="8"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="9"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="4"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="5"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="6"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="1"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="2"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="3"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary zero"
            buttonName="0"
            handleClick={this.handleClick}
          />
          <Button
            Addclass="primary"
            buttonName="."
            handleClick={this.handleClick}
          />
          <div className="secondary-div">
            <Button
              Addclass="secondary"
              buttonName="÷"
              handleClick={this.handleClick}
            />
            <Button
              Addclass="secondary"
              buttonName="x"
              handleClick={this.handleClick}
            />
            <Button
              Addclass="secondary"
              buttonName="-"
              handleClick={this.handleClick}
            />
            <Button
              Addclass="secondary"
              buttonName="+"
              handleClick={this.handleClick}
            />
            <Button
              Addclass="secondary"
              buttonName="="
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
