import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Firebase
import { auth } from '../../../firebase/utils';

// Redux
import { connect } from 'react-redux';

// Assets
import { ReactComponent as Logo } from '../../../assets/crown.svg';

// Scss
import './navbar.scss';

const Navbar = ({ user }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
       <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>Shop</Link>
      <Link className='option' to='/contact'>Contact</Link>
      {
        user ? 
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        : <Link className='option' to='/sign-in'>Sign In</Link>
      }
    </div>
  </div>
);

Navbar.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {})(Navbar);