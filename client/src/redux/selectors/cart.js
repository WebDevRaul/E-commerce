import { createSelector } from 'reselect';

const select_cart_state = state => state.cart;

export const select_cart_items = createSelector(
  [select_cart_state],
  cart => cart.cart_item
);

export const select_cart_hidden = createSelector(
  [select_cart_state],
  cart => cart.hidden
);

export const select_cart_items_count = createSelector(
  [select_cart_items],
  cart_item => cart_item.reduce((acc, cart_item) => acc + cart_item.qty, 0)
);

export const select_cart_total = createSelector(
  [select_cart_items],
  cart_item => cart_item.reduce((acc, cart_item) => acc + cart_item.qty * cart_item.price, 0)
);