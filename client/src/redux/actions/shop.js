import { firestore, convertItemsToObj } from '../../firebase/utils';
import { SHOP } from './types';

export const update_shop = () => dispatch => {
  dispatch({ type: SHOP.LOADING });
  const coll_Ref = firestore.collection('items');

  coll_Ref.get()
    .then(snapshot => dispatch({
      type: SHOP.SUCCESS,
      payload: convertItemsToObj(snapshot)
    }))
    .catch(e => dispatch({
      type: SHOP.ERROR,
      payload: e.response.data
    }))
}