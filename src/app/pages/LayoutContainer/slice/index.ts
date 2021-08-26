import { PayloadAction } from '@reduxjs/toolkit';
import { AppError, IPlayer, PlayerRole } from 'app/interfaces/common.interface';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { layoutContainerSaga } from './saga';
import { LayoutContainerState } from './types';

export const initialState: LayoutContainerState = {
  loading: [],
  error: {
    message: '',
  },
  players: [],
  keepers: [],
  defenders: [],
  midfielders: [],
  attackers: [],
};

const slice = createSlice({
  name: 'layoutContainer',
  initialState,
  reducers: {
    loadPlayers() {},
    setLoading(state, action: PayloadAction<string>) {
      state.loading = [...state.loading, action.payload];
    },
    removeLoading(state, action: PayloadAction<string>) {
      state.loading = state.loading.filter(load => load !== action.payload);
    },
    setError(state, action: PayloadAction<AppError>) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = initialState.error;
    },
    setPlayers(state, action: PayloadAction<{ [key: string]: IPlayer[] }>) {
      state.players = action.payload.players;
      state.keepers = action.payload[PlayerRole.keeper];
      state.defenders = action.payload[PlayerRole.defender];
      state.midfielders = action.payload[PlayerRole.midfielder];
      state.attackers = action.payload[PlayerRole.attacker];
    },
  },
});

export const { actions: layoutContainerActions } = slice;

export const useLayoutContainerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: layoutContainerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLayoutContainerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
