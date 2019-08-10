import { createSelector } from 'reselect';

const select_cart = state => state.cart;

export const select_cart_items = createSelector(
  [select_cart],
  cart => cart.cart_item
);

export const select_cart_items_count = createSelector(
  [select_cart_items],
  cart_item => cart_item.reduce((acc, cart_item) => acc + cart_item.qty, 0)
);