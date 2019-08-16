import { createSelector } from 'reselect';

const select_directory_state = state => state.directory;

export const select_directory = createSelector(
  [select_directory_state],
  directory => directory.sections
);