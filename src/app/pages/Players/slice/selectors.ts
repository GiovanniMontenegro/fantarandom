import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.players || initialState;

export const selectSelectedTab = createSelector(
  [selectSlice],
  state => state.selectedTab,
);

export const selectPlayers = createSelector(
  [selectSlice],
  state => state.players,
);

export const selectKeepers = createSelector(
  [selectSlice],
  state => state.keepers,
);

export const selectDefenders = createSelector(
  [selectSlice],
  state => state.defenders,
);

export const selectMidfilders = createSelector(
  [selectSlice],
  state => state.midfielders,
);

export const selectAttackers = createSelector(
  [selectSlice],
  state => state.attackers,
);

export const selectLoading = createSelector(
  [selectSlice],
  state => state.loading,
);

export const selectPickedPlayers = createSelector(
  [selectSlice],
  state => state.pickedPlayers,
);

export const selectError = createSelector([selectSlice], state => state.error);
