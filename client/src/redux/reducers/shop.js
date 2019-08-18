import { SHOP } from '../actions/types';

const INITIAL_STATE = {
  shop: {}
}

const shop = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case SHOP.UPDATE_SHOP:
      return {
        ...state,
        shop: action.payload
      }
    default:
      return state;
  }
}

export default shop;