import { IPlayer, PlayerRole } from 'app/interfaces/common.interface';
import { ITab } from '../interface/player.interface';

/* --- STATE --- */
export interface PlayersState {
  selectedTab: ITab;
  loading: string[];
  pickedPlayers: { [key in PlayerRole]: IPlayer[] };
}

export enum PlayerTabs {
  keeper = 'keeper',
  defender = 'defender',
  midfielder = 'midfielder',
  attacker = 'attacker',
}
