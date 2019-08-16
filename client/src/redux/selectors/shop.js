import { createSelector } from 'reselect';

const select_shop_state = state => state.shop;

export const select_shop = createSelector(
  [select_shop_state],
  shop => shop.shop
)