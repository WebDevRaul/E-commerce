import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

// Scss
import './navbar.scss';

const Navbar = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
       <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
    </div>
  </div>
);

export default Navbar;