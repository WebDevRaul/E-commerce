import React, { Component } from 'react';

// Components
import FormInput from '../../common/input/Form_input';
import CustomButton from '../../common/button/Custom_button';

// Firebase
import { signInWithGoogle } from '../../../firebase/utils';

// Scss
import './sign_in.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            name='email'
            value={email}
            onChange={this.onChange}
            type='email'
            label='email'
          />
          <FormInput
            name='password'
            value={password}
            onChange={this.onChange}
            type='password'
            label='password'
          />
          <div className='buttons'>
            <CustomButton value='Sign in' type='submit' isClass='' />
            <div onClick={signInWithGoogle}>
              <CustomButton value='Sign in with Google' isClass='google-sign-in' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}


export default SignIn