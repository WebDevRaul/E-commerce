import SHOP_DATA from '../../components/shop/data';

const INITIAL_STATE = {
  shop: SHOP_DATA
}

const shop = ( state=INITIAL_STATE, action ) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default shop;