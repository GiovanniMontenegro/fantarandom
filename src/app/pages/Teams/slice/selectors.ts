import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.teams || initialState;

export const selectTeams = createSelector([selectSlice], state => state);
