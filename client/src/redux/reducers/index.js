import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import cart from './cart';
import directory from '../data/directory';
import shop from './shop';
import payment from './checkout';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shop,
  payment
});


export default persistReducer(persistConfig, rootReducer);