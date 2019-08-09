import React, { Component } from 'react';

// Components
import CustomButton from '../../common/button/Custom_button';
import FormInput from '../../common/input/Form_input';

// Firebase
import { auth, createUserProfileDocument } from '../../../firebase/utils';

// Scss
import './register.scss';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    // validate password
    if(password !== password2) return alert('Passwords don`t match');
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { name });
      this.setState({ name: '', email: '', password: '', password2: '' });
    }
    catch(error) { console.log(error) }
  }

  render() {
    const { name, email, password, password2 } = this.state;
    return (
      <div className='register'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.onSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.onChange}
            label='name'
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.onChange}
            label='email'
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.onChange}
            label='password'
          />
          <FormInput
            type='password'
            name='password2'
            value={password2}
            onChange={this.onChange}
            label='confirm password'
          />
          <CustomButton 
            value='Sign Up'
            type='submit'
            isClass=''
          />
        </form>
      </div>
    )
  }
}

export default Register;