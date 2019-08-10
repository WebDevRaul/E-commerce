import { CART } from './types';

export const toggle_cart = () => ({
  type: CART.TOGGLE
})

export const add_item = item => ({
  type: CART.ADD_ITEM,
  payload: item
})