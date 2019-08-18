import { SHOP } from './types';

export const update_shop = data => ({
  type: SHOP.UPDATE_SHOP,
  payload: data
});