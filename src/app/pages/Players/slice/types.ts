import { AppError } from 'app/interfaces/common.interface';
import { IPlayer, ITab, PlayerRole } from '../interface/player.interface';

/* --- STATE --- */
export interface PlayersState {
  selectedTab: ITab;
  players: IPlayer[];
  keepers: IPlayer[];
  midfielders: IPlayer[];
  defenders: IPlayer[];
  attackers: IPlayer[];
  loading: string[];
  pickedPlayers: { [key in PlayerRole]: IPlayer[] };
  error: AppError;
}

export enum PlayerTabs {
  keeper = 'keeper',
  defender = 'defender',
  midfielder = 'midfielder',
  attacker = 'attacker',
}
