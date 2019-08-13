import { createSelector } from 'reselect';

const select_user_state = state => state.user;

export const select_user = createSelector(
  [select_user_state],
  user => user.user 
);