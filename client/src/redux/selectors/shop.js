import { createSelector } from 'reselect';

const select_shop_state = state => state.shop;

export const select_shop = createSelector(
  [select_shop_state],
  shop => shop.shop
);

export const select_collection_obj_to_array = createSelector(
  [select_shop],
  collections => Object.keys(collections).map(key => collections[key])
);

export const select_collection = collection_url_params => createSelector(
  [select_shop],
  collections => collections[collection_url_params]
);