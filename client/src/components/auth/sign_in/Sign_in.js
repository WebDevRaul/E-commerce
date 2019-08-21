import React, { useState } from 'react';

// Components
import FormInput from '../../common/input/Form_input';
import CustomButton from '../../common/button/Custom_button';

// Firebase
import { auth, signInWithGoogle } from '../../../firebase/utils';

// Scss
import './sign_in.scss';

const SignIn = () => {
  const [state, setChange] = useState({ email: '', password: '' });
  const { email, password } = state;

  const onChange = e => {
    setChange({...state , [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault();

    try{
      await auth.signInWithEmailAndPassword(email, password);
      setChange({ email: '', password: '' })
    } 
    catch(error) { console.log(error) }
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit} >
        <FormInput
          name='email'
          value={email}
          onChange={onChange}
          type='email'
          label='email'
        />
        <FormInput
          name='password'
          value={password}
          onChange={onChange}
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

export default SignIn