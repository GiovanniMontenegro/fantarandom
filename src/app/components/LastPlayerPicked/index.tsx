/**
 *
 * LastPlayerPicked
 *
 */
import { Col } from 'antd';
import { IPlayer } from 'app/pages/Players/interface/player.interface';
import * as React from 'react';
import './lastPlayerPicked.css';
import { PlayerPicked } from './PlayerPicked';
import { PlayerPickedPlaceholder } from './PlayerPickedPlaceholder';

interface Props {
  pickedPlayers: IPlayer[];
}

export function LastPlayerPicked(props: Props) {
  const generateLastPlayerPicked = () => {
    if (props.pickedPlayers && props.pickedPlayers.length > 1) {
      const reversed = [...props.pickedPlayers]
        .slice(0, props.pickedPlayers.length - 1)
        .reverse();
      return reversed.map(player => (
        <PlayerPicked key={player.id} player={player} />
      ));
    }
    return <PlayerPickedPlaceholder />;
  };

  return (
    <Col xs={11} offset={1}>
      <div
        className={'lastPlayerPickedContainer'}
        style={{ background: "url('campoVerde.jpg')" }}
      >
        {generateLastPlayerPicked()}
      </div>
    </Col>
  );
}
