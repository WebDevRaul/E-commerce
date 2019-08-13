import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// Components
import CartItem from '../cart_item/cart_item';

// Redux
import { connect } from 'react-redux';
import { select_cart_items } from '../../../../redux/selectors/cart';

// Common
import CustomButton from '../../../common/button/Custom_button';

// Scss
import './cart.scss';

const Cart = ({ cart_item, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cart_item.length ? 
        cart_item.map(item => (
          <CartItem key={item.id} item={item} />
        ))
        :
        <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <div className='button-wrapper' onClick={() => history.push('/checkout')}>
      <CustomButton value='GO TO CHECKOUT' isClass=''  />
    </div>
  </div>
);

Cart.propTypes = {
  cart_item: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  cart_item: select_cart_items(state)
});

export default withRouter(connect(mapStateToProps, null)(Cart));