import { Row } from 'antd';
import { PlayerRole, IPlayer } from 'app/interfaces/common.interface';
import { ITab } from 'app/pages/Players/interface/player.interface';

import { playersActions } from 'app/pages/Players/slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { LastPlayerPicked } from '../LastPlayerPicked';
import { PlayerRandomCard } from '../PlayerRandomCard';
import { RemainingPlayerInfo } from '../RemainingPlayerInfo';
import './playerRandom.css';
interface Props {
  selectedTab: ITab;
  pickedPlayers: { [key in PlayerRole]: IPlayer[] };
}

export function PlayerRandom(props: Props) {
  const dispatch = useDispatch();
  const getRemainingPlayerByRole = () => {
    let remainingPlayer = 0;
    const data = props.selectedTab.dataSource;
    const filteredData = filterRemainingData(data, props.selectedTab.role);
    remainingPlayer = filteredData.length;

    return remainingPlayer;
  };

  const filterRemainingData = (data: IPlayer[], role: PlayerRole) => {
    return data.filter(player => {
      const pickedPlayersByRole = props.pickedPlayers[role];
      let found = false;
      pickedPlayersByRole.forEach(playerPicked => {
        if (player.id === playerPicked.id) {
          found = true;
        }
      });
      return !found;
    });
  };

  const getARandomPlayerByRole = () => {
    let playerFound: IPlayer | undefined = undefined;

    const data = props.selectedTab.dataSource;
    const filteredData = filterRemainingData(data, props.selectedTab.role);

    if (filteredData && filteredData.length > 0) {
      const lengthRandom = filteredData.length;
      const randomPickedPosition = Math.floor(Math.random() * lengthRandom);
      playerFound = filteredData[randomPickedPosition];
    }

    return playerFound;
  };

  const onRandomize = () => {
    const player = getARandomPlayerByRole();
    if (player) {
      dispatch(playersActions.setRandomPlayerPicked(player));
    }
  };

  const getLastPlayerPickedByRole = () => {
    let player: IPlayer | undefined = undefined;

    const data = props.pickedPlayers[props.selectedTab.role];
    if (data && data.length > 0) {
      player = data[data.length - 1];
    }

    return player;
  };

  const lastPlayerPicked = getLastPlayerPickedByRole();

  return (
    <>
      <Row style={{ width: '100%', marginTop: 15 }}>
        <RemainingPlayerInfo
          getRemainingPlayerByRole={getRemainingPlayerByRole}
          tabName={props.selectedTab.name}
        />
      </Row>
      <Row style={{ width: '100%', marginTop: 40 }} justify="center">
        <PlayerRandomCard
          onRandomize={onRandomize}
          player={lastPlayerPicked}
          selectedTab={props.selectedTab}
        />
        <LastPlayerPicked
          pickedPlayers={props.pickedPlayers[props.selectedTab.role]}
        />
      </Row>
    </>
  );
}
