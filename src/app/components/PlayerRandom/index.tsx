import { Button, Col, Row } from 'antd';
import {
  IPlayer,
  ITab,
  PlayerRole,
} from 'app/pages/Players/interface/player.interface';
import { playersActions } from 'app/pages/Players/slice';
import React from 'react';
import { useEffect } from 'react';
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
  const [lastPlayerPicked, setLastPlayerPicked] = React.useState<
    IPlayer | undefined
  >();

  useEffect(() => {
    const picked = getLastPlayerPickedByRole();
    setLastPlayerPicked(picked);
  }, [props.selectedTab, props.pickedPlayers]);

  const getRemainingPlayerByRole = () => {
    let remainingPlayer = 0;
    const data = props.selectedTab.dataSource;
    if (data && data.length > 0) {
      const filteredData = filterRemainingData(data, props.selectedTab.role);
      remainingPlayer = filteredData.length;
    }
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

  return (
    <>
      <Row style={{ width: '100%', marginTop: 15 }}>
        <RemainingPlayerInfo
          getRemainingPlayerByRole={getRemainingPlayerByRole}
          tabName={props.selectedTab.name}
        />
      </Row>
      <Row style={{ width: '100%', marginTop: 20 }} justify="center">
        <Col xs={12}>
          <PlayerRandomCard
            player={lastPlayerPicked}
            selectedTab={props.selectedTab}
          />
        </Col>
        <Col xs={11} offset={1}>
          <Row align="middle" justify="center">
            <Col>
              <Button
                size="large"
                className="btn-choose-player"
                type="primary"
                style={{ marginTop: 15, marginBottom: 15 }}
                onClick={onRandomize}
              >
                Scegli un giocatore
              </Button>
            </Col>
            <Col xs={24}>
              <LastPlayerPicked
                pickedPlayers={props.pickedPlayers[props.selectedTab.role]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
