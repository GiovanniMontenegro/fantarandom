import { Card, Col, Row } from 'antd';
import { IPlayer } from 'app/pages/Players/interface/player.interface';
import * as React from 'react';

interface Props {
  player: IPlayer;
}

export function PlayerPicked(props: Props) {
  return (
    <Card
      key={`players_picked_${props.player.id}`}
      style={
        {
          //backgroundColor: '#ffffff25',
          //border: 0,
          //borderBottom: '2px solid #00000025',
        }
      }
    >
      <Row style={{ width: '100%' }} align="middle">
        <Col xs={8} className="last-player-picked-name">
          {props.player.name.toUpperCase()}
        </Col>
        <Col xs={8}>
          <Row justify="center">
            <Col>
              <div className="last-player-picked-quotation-title">INIZIALE</div>
              <div className="last-player-picked-quotation-value">
                {props.player.initialQuotation}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={7} offset={1}>
          <Row>
            <Col>
              <div className="last-player-picked-quotation-title">ATTUALE</div>
              <div className="last-player-picked-quotation-value">
                {props.player.actualQuotation}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
