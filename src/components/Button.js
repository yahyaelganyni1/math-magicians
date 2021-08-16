/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ Addclass, handleClick, buttonName }) {
  return (
    <button type="button" className={Addclass} onClick={handleClick}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  Addclass: PropTypes.string,
  handleClick: PropTypes.string,
  buttonName: PropTypes.string,
};

Button.defaultProps = { Addclass: '', handleClick: Button, buttonName: '' };
