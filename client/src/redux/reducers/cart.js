import { CART } from '../actions/types';

const INITIAL_STATE = {
  hidden: true
};

const cart = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case CART.TOGGLE:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cart;