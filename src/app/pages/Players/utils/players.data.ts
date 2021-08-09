import csv from 'csvtojson';
import { IPlayer } from '../interface/player.interface';
const extractPlayersData = async data => {
  let extractedData: any[] = [];
  extractedData = await csv({
    noheader: true,
    output: 'csv',
  }).fromString(data);
  return extractedData;
};

const mappingNations = nation => {
  const splittedNation = nation.split(';');
  let nationality = splittedNation[0];
  /* splittedNation.forEach(nation => {
    nationality += `${nation} `;
  });*/
  return nationality;
};

export const mappingPlayersData = async (
  data,
): Promise<{ [key: string]: IPlayer[] }> => {
  const extractedData = await extractPlayersData(data);
  console.log('extractedData: ', extractedData);
  const players = extractedData.map(player => ({
    id: player[0],
    name: player[1],
    role: player[3],
    team: player[9],
    bornYear: player[14],
    favoriteFoot: player[12],
    nation: mappingNations(player[13]),
    actualQuotation: player[6],
    initialQuotation: player[5],
  }));

  const reducedPlayers: { [key: string]: IPlayer[] } = {
    players,
  };
  players.forEach(player => {
    if (reducedPlayers[player.role] && reducedPlayers[player.role].length > 0) {
      reducedPlayers[player.role] = [...reducedPlayers[player.role], player];
    } else {
      reducedPlayers[player.role] = [player];
    }
  });
  return reducedPlayers;
};
