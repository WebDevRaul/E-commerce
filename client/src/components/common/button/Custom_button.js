import React from 'react';
import PropTypes from 'prop-types';

// Scss
import './custom_button.scss';

const CustomButton = ({ value, type, isClass}) => (
  <button className={`custom-button ${isClass}`} type={type}>
    {value}
  </button>
);

CustomButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isClass: PropTypes.string.isRequired
}

CustomButton.defaultProps = {
  type: 'button'
}

export default CustomButton;