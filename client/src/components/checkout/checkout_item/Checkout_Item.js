import React from 'react';
import PropTypes from 'prop-types';

// Scss
import './checkout_item.scss';

const CheckoutItem = ({ item: { name, imageUrl, price, qty } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => console.log('remove 1 item')}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => console.log('add item')}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => console.log('remove')}>
        &#10005;
      </div>
  </div>
)};

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CheckoutItem;