export interface AppError {
  message: string;
}

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
}

export enum PlayerRole {
  attacker = 'A',
  midfielder = 'C',
  defender = 'D',
  keeper = 'P',
}
