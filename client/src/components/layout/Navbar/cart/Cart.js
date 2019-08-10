import React from 'react';
import PropTypes from 'prop-types';

// Components
import CartItem from '../cart_item/cart_item';

// Redux
import { connect } from 'react-redux';
import { select_cart_items } from '../../../../redux/selectors/cart';

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

const mapStateToProps = state => ({
  cart_item: select_cart_items(state)
});

export default connect(mapStateToProps, null)(Cart);