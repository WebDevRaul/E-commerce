import React from 'react';
import PropTypes from 'prop-types';

import './spinner.scss';

const Spinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? 
    <div className='spinner-overlay'><div className='spinner' /></div> 
    :
    <WrappedComponent { ...otherProps } />
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  otherProps: PropTypes.object.isRequired
}

export default Spinner;