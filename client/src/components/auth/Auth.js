import React from 'react';

// Components
import SignIn from './sign_in/Sign_in';
import Register from './register/Register';

// Scss
import './auth.scss';

const Auth = () => (
  <div className='auth'>
    <SignIn />
    <Register />
  </div>
);

export default Auth;