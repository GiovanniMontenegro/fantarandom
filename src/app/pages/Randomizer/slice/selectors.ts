import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.randomizer || initialState;

export const selectRandomizer = createSelector([selectSlice], state => state);
