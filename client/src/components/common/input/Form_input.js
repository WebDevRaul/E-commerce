import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Scss
import './form_input.scss';

const FormInput = ({ name, value, onChange, type, label }) => (
  <div className='group'>
    <input 
      className='form-input'
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      required
      autoComplete='true'
      />
      {
        label ? 
        <label className={classnames('form-input-label', { 'shrink': value })}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        : null 
      }
  </div>
);

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.bool.isRequired
}

export default FormInput;