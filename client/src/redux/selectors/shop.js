import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneekers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const select_shop_state = state => state.shop;

export const select_shop = createSelector(
  [select_shop_state],
  shop => shop.shop
);

export const select_collection = collection_url_params => createSelector(
  [select_shop],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collection_url_params])
)