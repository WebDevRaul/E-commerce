import React from 'react';
import PropTypes from 'prop-types';

// Components
import StripeCheckout from 'react-stripe-checkout';

// Redux
import { connect } from 'react-redux';
import makePayment from '../../../redux/actions/checkout';

// Secret
import { publishable_key } from '../../../config/keys';

const StripeBtn = ({ price, makePayment }) => {
  const price_for_stripe = price * 100;
  const stripe_key = publishable_key;

  const onToken = token => {
    const data = { amount: price_for_stripe, token };
    makePayment(data);
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
  price: PropTypes.number.isRequired,
  makePayment: PropTypes.func.isRequired
}


export default connect(null, { makePayment })(StripeBtn);