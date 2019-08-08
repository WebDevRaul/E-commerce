import React, { Component } from 'react';

// Components
import FormInput from '../../common/Form_input';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault();
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
            label='Email'
            value={email}
            onChange={this.onChange}
            type='email'
          />
          <FormInput
            name='password'
            label='Password'
            value={password}
            onChange={this.onChange}
            type='password'
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}


export default SignIn