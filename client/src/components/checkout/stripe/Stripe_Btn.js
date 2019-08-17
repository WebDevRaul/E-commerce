import React from 'react';
import PropTypes from 'prop-types';

// Components
import StripeCheckout from 'react-stripe-checkout';

// Secret
import { publishable_key } from '../../../config/keys';

const StripeBtn = ({ price }) => {
  const price_for_stripe = price * 100;
  const stripe_key = publishable_key;

  const onToken = token => {
    console.log(token);
    alert('Payment Success');
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='E-Shop Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={price_for_stripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={stripe_key}
    />
  )
}

StripeBtn.propTypes = {
  price: PropTypes.number.isRequired
}


export default StripeBtn;