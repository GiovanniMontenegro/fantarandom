import { Col, Row } from 'antd';
import React from 'react';

interface Props {
  getRemainingPlayerByRole: () => number;
  tabName: string;
}

export function RemainingPlayerInfo(props: Props) {
  return (
    <Col xs={24}>
      <Row className="remaining-card" align="middle" justify="center">
        <Col xs={12} style={{ fontSize: 24 }}>
          <Row align="middle" justify="center">
            <Col
              style={{ textAlign: 'center' }}
            >{`${props.tabName} rimanenti`}</Col>
          </Row>
        </Col>

        <Col
          xs={12}
          style={{
            fontSize: 36,
            backgroundColor: '#E27D60',
            color: '#fff',
            height: '100%',
          }}
        >
          <Row align="middle" justify="center" style={{ height: '100%' }}>
            <Col>{props.getRemainingPlayerByRole()}</Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}
