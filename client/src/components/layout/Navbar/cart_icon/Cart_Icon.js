import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShoppingIcon } from '../../../../assets/shopping-bag.svg';

// Redux
import { connect } from 'react-redux';
import { toggle_cart } from '../../../../redux/actions/cart';
import { select_cart_items_count } from '../../../../redux/selectors/cart';

// Scss
import './cart_icon.scss';

const CartIcon = ({ toggle_cart, item_count }) => (
  <div className='cart-icon' onClick={toggle_cart}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{item_count}</span>
  </div>
);

CartIcon.propTypes = {
  item_count: PropTypes.number.isRequired,
  toggle_cart: PropTypes.func.isRequired
}

const mapStateToProps = state=> ({
  item_count: select_cart_items_count(state)
});

export default connect( mapStateToProps, { toggle_cart } )(CartIcon);