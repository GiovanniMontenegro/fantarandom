import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.landingPage || initialState;

export const selectLandingPage = createSelector([selectSlice], state => state);
export const selectPercentage = createSelector(
  [selectSlice],
  state => state.percentage,
);

export const selectCaption = createSelector(
  [selectSlice],
  state => state.caption,
);
