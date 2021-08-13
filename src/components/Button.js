/* eslint-disable */
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.Addclass} onClick={this.props.handleClick}>
        {this.props.buttonName}
      </button>
    );
  }
}
