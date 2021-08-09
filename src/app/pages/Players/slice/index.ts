import { PayloadAction } from '@reduxjs/toolkit';
import { AppError } from 'app/interfaces/common.interface';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { IPlayer, ITab, PlayerRole } from '../interface/player.interface';
import { playersSaga } from './saga';
import { PlayersState, PlayerTabs } from './types';

export const initialState: PlayersState = {
  selectedTab: {
    id: PlayerTabs.keeper,
    name: 'Portieri',
    dataSource: [],
    role: PlayerRole.keeper,
  },
  players: [],
  keepers: [],
  defenders: [],
  midfielders: [],
  attackers: [],
  loading: [],
  pickedPlayers: {
    A: [],
    C: [],
    D: [],
    P: [],
  },
  error: {
    message: '',
  },
};

const slice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setSelectedTab(state, action: PayloadAction<ITab>) {
      state.selectedTab = action.payload;
    },
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
