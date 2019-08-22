import axios from 'axios';
import { CHECKOUT } from './types';

const makePayment = data => dispatch => {
  axios
    .post('/payment', data)
    .then(res => dispatch({
      type: CHECKOUT.MAKE_PAYMENT,
      payload: 'Payment successful'
    }))
    .catch(error => dispatch({
      type: CHECKOUT.ERROR_PAYMENT,
      payload: error.response.data
    }))
}

export default makePayment;