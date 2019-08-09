import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import isEmpty from '../common/isEmpty';

// Components
import SignIn from './sign_in/Sign_in';
import Register from './register/Register';

// Redux
import { connect } from 'react-redux';

// Scss
import './auth.scss';

const Auth = ({ user }) => {
  return (
    isEmpty(user.user) ?
    <div className='auth'>
      <SignIn />
      <Register />
    </div>
    : <Redirect to='/' />
  )
}

Auth.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(Auth);