import { CART } from '../actions/types';
import { add_item_to_cart } from '../utils/cart_utils';

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
        cart_item: add_item_to_cart(state.cart_item, action.payload)
      }
    case CART.DELETE_ITEM:
      return {
        ...state,
        cart_item: state.cart_item.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cart;