import { SHOP } from '../actions/types';

const INITIAL_STATE = {
  shop: null,
  isLoading: true
}

const shop = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case SHOP.UPDATE_SHOP:
      return {
        ...state,
        shop: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default shop;