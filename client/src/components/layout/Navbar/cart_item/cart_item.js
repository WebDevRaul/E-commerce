import React from 'react';
import PropTypes from 'prop-types';

// Scss
import './cart_item.scss';

const CartItem = ({ item }) => {
  const { name, price, qty, imageUrl } = item;
  return(
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>{qty} x {price}</span>
    </div>
  </div>
)};

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem;