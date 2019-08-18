import { SHOP, LOADING } from '../actions/types';

const INITIAL_STATE = {
  shop: null,
  isLoading: false
}

const shop = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case LOADING.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
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