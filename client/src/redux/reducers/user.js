import { USER } from '../actions/types';

const INITIAL_STATE = {
  user: {}
}

const user = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case USER.SET_USER:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state;
  };
};

export default user;