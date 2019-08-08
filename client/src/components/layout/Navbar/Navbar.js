import React from 'react';
import { Link } from 'react-router-dom';

// Firebase
import { auth } from '../../../firebase/utils';

// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

// Scss
import './navbar.scss';

const Navbar = ({ currentUser }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
       <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        : <Link className='option' to='/sign-in'>Sign In</Link>
      }
    </div>
  </div>
);

export default Navbar;