import { CHECKOUT } from '../actions/types';

const INITIAL_STATE = {
  payment: '',
  error: ''
};

const payment = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case CHECKOUT.MAKE_PAYMENT:
      return {
        ...state,
        payment: action.payload
      }
    case CHECKOUT.ERROR_PAYMENT:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default payment;