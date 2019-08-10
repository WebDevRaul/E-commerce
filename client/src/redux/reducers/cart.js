import { CART } from '../actions/types';

const INITIAL_STATE = {
  hidden: true,
  cart_item: []
};

const cart = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case CART.TOGGLE:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CART.ADD_ITEM:
      return {
        ...state,
        cart_item: [...state.cart_item, action.payload]
      }
    default:
      return state;
  }
}

export default cart;