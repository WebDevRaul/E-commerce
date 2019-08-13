import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import isEmpty from '../common/isEmpty';

// Components
import SignIn from './sign_in/Sign_in';
import Register from './register/Register';

// Redux
import { connect } from 'react-redux';
import { select_user } from '../../redux/selectors/user';

// Scss
import './auth.scss';

const Auth = ({ user }) => {
  return (
    isEmpty(user) ?
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

// const mapStateToProps = ({ user: { user } }) => ({
//   user
// });

const mapStateToProps = state => ({
  user: select_user(state)
});

export default connect(mapStateToProps, {})(Auth);