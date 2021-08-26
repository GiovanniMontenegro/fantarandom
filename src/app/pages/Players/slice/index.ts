import { PayloadAction } from '@reduxjs/toolkit';
import { IPlayer, PlayerRole } from 'app/interfaces/common.interface';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ITab } from '../interface/player.interface';
import { playersSaga } from './saga';
import { PlayersState, PlayerTabs } from './types';

export const initialState: PlayersState = {
  selectedTab: {
    id: PlayerTabs.keeper,
    name: 'Portieri',
    dataSource: [],
    role: PlayerRole.keeper,
  },
  loading: [],
  pickedPlayers: {
    A: [],
    C: [],
    D: [],
    P: [],
  },
};

const slice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setSelectedTab(state, action: PayloadAction<ITab>) {
      state.selectedTab = action.payload;
    },
    setLoading(state, action: PayloadAction<string>) {
      state.loading = [...state.loading, action.payload];
    },
    removeLoading(state, action: PayloadAction<string>) {
      state.loading = state.loading.filter(load => load !== action.payload);
    },
    setRandomPlayerPicked(state, action: PayloadAction<IPlayer>) {
      const roleValues = state.pickedPlayers[action.payload.role];
      const pickedPlayer = state.pickedPlayers;
      pickedPlayer[action.payload.role] = [...roleValues, action.payload];
      state.pickedPlayers = pickedPlayer;
    },
    resetSelectedPlayer(state, action: PayloadAction<PlayerRole>) {
      const picked = state.pickedPlayers;
      picked[action.payload] = [];
      state.pickedPlayers = picked;
    },
    resetRandomPlayersPicked(state) {
      state.pickedPlayers = initialState.pickedPlayers;
    },
  },
});

export const { actions: playersActions } = slice;

export const usePlayersSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: playersSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = usePlayersSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
