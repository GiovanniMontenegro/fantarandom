import { Card, Col, Row } from 'antd';
import { IPlayer } from 'app/pages/Players/interface/player.interface';
import { getNationsClassname } from 'app/pages/Players/utils/nations';
import React from 'react';

interface Props {
  player: IPlayer;
}

export function PlayerCard(props: Props) {
  return (
    <Card style={{ background: "url('campoVerde.jpg')", borderRadius: 20 }}>
      <div style={{ backgroundColor: '#ffffff15' }}>
        <Row align="middle" justify="center">
          <Col>
            <div
              style={{
                fontSize: 36,
                textAlign: 'center',
                color: '#fbff00',
              }}
            >
              {props.player.name}
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 15 }}>
          <Col xs={12}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <img
                alt="scudetto_squadra"
                src={`teams/${props.player.team.toLowerCase()}.png`}
                style={{ height: 65 }}
              />
            </div>
          </Col>
          <Col xs={11} offset={1}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <span className={getNationsClassname(props.player.nation)}></span>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 15 }} align="middle" justify="center">
          <div style={{ fontSize: 18, color: '#fbff00', fontWeight: 600 }}>
            QUOTAZIONE
          </div>
        </Row>
        <Row style={{ marginTop: 20 }} align="middle" justify="center">
          <Col xs={12}>
            <div
              style={{
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 600,
                color: '#fbff00',
              }}
            >
              ATTUALE
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                textAlign: 'center',
                color: '#fff',
              }}
            >
              {props.player.actualQuotation}
            </div>
          </Col>
          <Col xs={11} offset={1}>
            <div
              style={{
                fontSize: 16,
                textAlign: 'center',
                fontWeight: 600,
                color: '#fbff00',
              }}
            >
              INIZIALE
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 600,
                textAlign: 'center',
                color: '#fff',
              }}
            >
              {props.player.initialQuotation}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}
