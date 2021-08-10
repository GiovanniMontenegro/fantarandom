import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.layoutContainer || initialState;

export const selectLayoutContainer = createSelector(
  [selectSlice],
  state => state,
);
