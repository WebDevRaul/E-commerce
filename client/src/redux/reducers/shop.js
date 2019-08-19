import { SHOP } from '../actions/types';

const INITIAL_STATE = {
  shop: null,
  isLoading: false,
  error: undefined
}

const shop = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    case SHOP.LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SHOP.SUCCESS:
      return {
        ...state,
        isLoading: false,
        shop: action.payload
      }
    case SHOP.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default shop;