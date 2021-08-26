import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.players || initialState;

export const selectSelectedTab = createSelector(
  [selectSlice],
  state => state.selectedTab,
);

export const selectLoading = createSelector(
  [selectSlice],
  state => state.loading,
);

export const selectPickedPlayers = createSelector(
  [selectSlice],
  state => state.pickedPlayers,
);
