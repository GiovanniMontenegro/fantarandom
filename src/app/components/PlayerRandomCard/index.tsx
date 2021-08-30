import { Col, Row } from 'antd';
import { IPlayer, ITab } from 'app/pages/Players/interface/player.interface';
import React from 'react';
import { PlayerCard } from './PlayerCard';
import { PlayerCardPlaceholder } from './PlayerCardPlaceholder';

interface Props {
  player: IPlayer | undefined;
  selectedTab: ITab;
}

export function PlayerRandomCard(props: Props) {
  return (
    <Row justify="center">
      <Col xs={24}>
        {props.player ? (
          <PlayerCard player={props.player} />
        ) : (
          <PlayerCardPlaceholder selectedTab={props.selectedTab} />
        )}
      </Col>
    </Row>
  );
}
