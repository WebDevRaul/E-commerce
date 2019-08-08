import React from 'react';

// Scss
import './custom_button.scss';

const CustomButton = ({ value,  type}) => (
  <button className='custom-button' type={type}>
    {value}
  </button>
);

export default CustomButton;