import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isEmpty from '../isEmpty';

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
      autoComplete='true'
      required
      />
      {
        !isEmpty(label) ? 
        <label className={classnames('form-input-label', { 'shrink': value })}>
          {label.charAt(0).toUpperCase() + label.slice(1)}
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
  label: PropTypes.string.isRequired
}

export default FormInput;