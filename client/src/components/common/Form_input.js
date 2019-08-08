import React from 'react';
import PropTypes from 'prop-types';

// Scss
import './form_input.scss';

const FormInput = ({ name, label, value, onChange, type }) => (
  <div>
    <label>{label}</label>
    <input 
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required
    />
  </div>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default FormInput;