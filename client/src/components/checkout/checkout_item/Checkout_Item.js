import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { delete_item } from '../../../redux/actions/cart';

// Scss
import './checkout_item.scss';

const CheckoutItem = ({ item, delete_item }) => {
  const { name, imageUrl, price, qty } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => console.log('remove 1')}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => console.log('add item')}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => delete_item(item)}>
        &#10005;
      </div>
  </div>
)};

CheckoutItem.propTypes = {
  item: PropTypes.object.isRequired,
  delete_item: PropTypes.func.isRequired
}

export default connect(null, { delete_item })(CheckoutItem);