import { CART } from './types';

export const toggle_cart = () => ({
  type: CART.TOGGLE
});

export const add_item = item => ({
  type: CART.ADD_ITEM,
  payload: item
});

export const remove_item = item => ({
  type: CART.REMOVE_ITEM,
  payload: item
});

export const delete_item = item => ({
  type: CART.DELETE_ITEM,
  payload: item
});