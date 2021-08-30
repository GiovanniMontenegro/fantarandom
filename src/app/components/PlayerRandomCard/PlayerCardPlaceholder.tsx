import { Card, Col, Row } from 'antd';
import { ITab } from 'app/pages/Players/interface/player.interface';
import { PlayerTabs } from 'app/pages/Players/slice/types';
import React from 'react';

interface Props {
  selectedTab: ITab;
}

export function PlayerCardPlaceholder(props: Props) {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Card
          style={{
            background: "url('campoVerde.jpg')",
            borderRadius: 20,
          }}
        >
          <Row justify="center" align="middle" style={{ height: 500 }}>
            <Col style={{ marginTop: 25, textAlign: 'center' }}>
              <span
                style={{
                  fontSize: 18,
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 600,
                }}
              >
                Inizia la tua asta del Fantacalcio{' '}
                {props.selectedTab.id === PlayerTabs.attacker ? 'degli' : 'dei'}{' '}
                {props.selectedTab.name}
              </span>
            </Col>
            <Col>
              <img
                src="footballPlayer.png"
                alt="logo serie A"
                style={{
                  width: 210,
                  height: 210,
                  backgroundColor: '#ffffff10',
                }}
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
