import { AppError, IPlayer } from 'app/interfaces/common.interface';

/* --- STATE --- */
export interface LayoutContainerState {
  players: IPlayer[];
  keepers: IPlayer[];
  midfielders: IPlayer[];
  defenders: IPlayer[];
  attackers: IPlayer[];
  loading: string[];
  error: AppError;
}
