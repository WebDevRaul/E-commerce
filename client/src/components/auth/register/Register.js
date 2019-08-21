import React, { useState } from 'react';

// Components
import CustomButton from '../../common/button/Custom_button';
import FormInput from '../../common/input/Form_input';

// Firebase
import { auth, createUserProfileDocument } from '../../../firebase/utils';

// Scss
import './register.scss';

const Register = () => {
  const [state, setState] = useState({ 
    name: '',
    email: '',
    password: '',
    password2: ''
   });
  const { name, email, password, password2 } = state;

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmit = async e => {
    e.preventDefault();
    // validate password
    if(password !== password2) return alert('Passwords don`t match');
    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { name });
      setState({ name: '', email: '', password: '', password2: '' });
    }
    catch(error) { console.log(error) }
  }
  return (
    <div className='register'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={onSubmit}>
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          label='name'
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='password'
        />
        <FormInput
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
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

export default Register;