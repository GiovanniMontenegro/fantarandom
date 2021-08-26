import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { LANDING_PAGE_STEPS } from '../utils/landingPage.constants';
import { landingPageSaga } from './saga';
import { LandingPageState } from './types';

export const initialState: LandingPageState = {
  caption: LANDING_PAGE_STEPS[0],
  percentage: 0,
};

const slice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    setProgress(
      state,
      action: PayloadAction<{ percentage: number; caption: string }>,
    ) {
      state.percentage = action.payload.percentage;
      state.caption = action.payload.caption;
    },
  },
});

export const { actions: landingPageActions } = slice;

export const useLandingPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: landingPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLandingPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
