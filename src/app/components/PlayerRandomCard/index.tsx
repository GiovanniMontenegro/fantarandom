import { Button, Col, Row } from 'antd';
import { IPlayer, ITab } from 'app/pages/Players/interface/player.interface';
import React from 'react';
import { PlayerCard } from './PlayerCard';
import { PlayerCardPlaceholder } from './PlayerCardPlaceholder';

interface Props {
  player: IPlayer | undefined;
  selectedTab: ITab;
  onRandomize: () => void;
}

export function PlayerRandomCard(props: Props) {
  return (
    <Col xs={12}>
      <Row justify="center">
        <Col xs={24}>
          {props.player ? (
            <PlayerCard player={props.player} />
          ) : (
            <PlayerCardPlaceholder selectedTab={props.selectedTab} />
          )}
        </Col>
        <Col xs={12}>
          <Button
            size="large"
            onClick={props.onRandomize}
            className="btn-choose-player"
            type="primary"
            style={{ marginTop: 25 }}
          >
            Scegli un giocatore
          </Button>
        </Col>
      </Row>
    </Col>
  );
}
