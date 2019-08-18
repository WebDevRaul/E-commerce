import { createSelector } from 'reselect';

const select_shop_state = state => state.shop;
const select_isLoading_state = state => state.shop.isLoading;

export const select_isLoading = createSelector(
  [select_isLoading_state],
  isLoading => isLoading
);

export const select_shop = createSelector(
  [select_shop_state],
  shop => shop.shop
);

export const select_collection_obj_to_array = createSelector(
  [select_shop],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const select_collection = collection_url_params => createSelector(
  [select_shop],
  collections => collections ? collections[collection_url_params] : null 
);