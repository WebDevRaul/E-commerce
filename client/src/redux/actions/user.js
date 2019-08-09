import { USER } from './types';

export const set_user = user => ({
  type: USER.SET_USER,
  payload: user
});