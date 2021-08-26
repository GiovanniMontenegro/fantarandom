import { Card, Col, Row } from 'antd';
import { IPlayer } from 'app/interfaces/common.interface';

import * as React from 'react';

interface Props {
  player: IPlayer;
}

export function PlayerPicked(props: Props) {
  return (
    <Card
      key={`players_picked_${props.player.id}`}
      style={{
        backgroundColor: '#ffffff25',
        border: 0,
        borderBottom: '2px solid #fff',
      }}
    >
      <Row style={{ width: '100%' }} align="middle">
        <Col xs={8} style={{ fontSize: 16, fontWeight: 600, color: '#fbff00' }}>
          {props.player.name.toUpperCase()}
        </Col>
        <Col xs={8}>
          <Row justify="center">
            <Col>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#fbff00' }}>
                INIZIALE
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                {props.player.initialQuotation}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={7} offset={1}>
          <Row>
            <Col>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#fbff00' }}>
                ATTUALE
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                {props.player.actualQuotation}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
