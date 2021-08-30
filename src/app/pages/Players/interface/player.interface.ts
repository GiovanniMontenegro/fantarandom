import { PlayerTabs } from '../slice/types';

export interface IPlayer {
  id: string;
  name: string;
  actualQuotation: string;
  initialQuotation: string;
  role: PlayerRole;
  team: string;
  bornYear: string;
  favoriteFoot: string;
  nation: string;
  urlPlayerImage: string;
}

export enum PlayerRole {
  attacker = 'A',
  midfielder = 'C',
  defender = 'D',
  keeper = 'P',
}

export interface ITab {
  id: PlayerTabs;
  name: string;
  dataSource: IPlayer[];
  role: PlayerRole;
}
