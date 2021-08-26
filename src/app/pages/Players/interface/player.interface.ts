import { IPlayer, PlayerRole } from 'app/interfaces/common.interface';
import { PlayerTabs } from '../slice/types';

export interface ITab {
  id: PlayerTabs;
  name: string;
  dataSource: IPlayer[];
  role: PlayerRole;
}
