import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShoppingIcon } from '../../../../assets/shopping-bag.svg';

// Redux
import { connect } from 'react-redux';
import { toggle_cart } from '../../../../redux/actions/cart';

// Scss
import './cart_icon.scss';

const CartIcon = ({ toggle_cart }) => (
  <div className='cart-icon' onClick={toggle_cart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

CartIcon.propTypes = {
  toggle_cart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({});

export default connect( mapStateToProps, { toggle_cart } )(CartIcon);