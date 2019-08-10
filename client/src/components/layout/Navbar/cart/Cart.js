import React from 'react';

// Common
import CustomButton from '../../../common/button/Custom_button';

// Scss
import './cart.scss';

const Cart = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton value='GO TO CHECKOUT' isClass='' />
  </div>
)

export default Cart;