import React from 'react';
import PropTypes from 'prop-types';

// Components
import CartItem from '../cart_item/cart_item';

// Redux
import { connect } from 'react-redux';

// Common
import CustomButton from '../../../common/button/Custom_button';

// Scss
import './cart.scss';

const Cart = ({ cart_item }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cart_item.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      }
    </div>
    <CustomButton value='GO TO CHECKOUT' isClass='' />
  </div>
);

Cart.propTypes = {
  cart_item: PropTypes.array.isRequired
}

const mapStateToProps = ({ cart: { cart_item } }) => ({
  cart_item
})

export default connect(mapStateToProps, null)(Cart);