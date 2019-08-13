import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_cart_items, select_cart_total } from '../../redux/selectors/cart';

// Scss
import './checkout.scss';

const Checkout = ({ cart_item, cart_total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {
      cart_item.map(i => i.name)
    }
    <div className='total'>TOTAL: ${cart_total}</div>
    <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
  </div>
);

Checkout.propTypes  = {
  cart_item: PropTypes.array.isRequired,
  cart_total: PropTypes.number.isRequired
}

const mapStateToProps = createStructuredSelector({
  cart_item: select_cart_items,
  cart_total: select_cart_total
});

export default connect(mapStateToProps, null)(Checkout);