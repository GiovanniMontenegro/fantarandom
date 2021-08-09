import { Card, Col, Row } from 'antd';
import React from 'react';
import './lastPlayerPicked.css';

export function PlayerPickedPlaceholder() {
  return (
    <Card
      key="players_picked_placeholder"
      className={'playerPickedPlaceholderCard'}
      style={{ background: "url('campoVerde.jpg')" }}
    >
      <Row
        className={'playerPickedPlaceholderRow'}
        justify="center"
        align="middle"
      >
        <Col className={'playerPickedPlaceholderInfo'}>
          Qui troverai gli ultimi giocatori selezionati
        </Col>
      </Row>
    </Card>
  );
}
