import { Card, Col, Row } from 'antd';
import { IPlayer } from 'app/pages/Players/interface/player.interface';
import { getNationsClassname } from 'app/pages/Players/utils/nations';
import React from 'react';
import { useEffect } from 'react';

interface Props {
  player: IPlayer;
}

export function PlayerCard(props: Props) {
  const [hasImage, setHasImage] = React.useState(false);
  useEffect(() => {
    setHasImage(props.player && !!props.player.urlPlayerImage);
  }, [props.player]);
  return (
    <Card style={{ borderRadius: 20 }}>
      <div>
        <Row align="middle" justify="center">
          <Col className="player-card-name">{props.player.name}</Col>
          <Col xs={24} className="player-card-image-container">
            {hasImage && (
              <img
                className="player-card-image-component"
                src={props.player.urlPlayerImage}
                alt={`${props.player.name}`}
              />
            )}
          </Col>
        </Row>
        <Row
          style={{
            marginTop: 15,
            borderRadius: 10,
          }}
        >
          <Col xs={12}>
            <div
              className={`${
                props.player.team.toLowerCase() === 'juventus'
                  ? 'player-card-scudetto-container-juve'
                  : 'player-card-scudetto-container'
              }`}
            >
              <img
                alt="scudetto_squadra"
                src={`teams/${props.player.team.toLowerCase()}.png`}
                style={{ height: 65 }}
              />
            </div>
          </Col>
          <Col xs={11} offset={1}>
            <div className="player-card-nation-container">
              <span className={getNationsClassname(props.player.nation)}></span>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 15 }} align="middle" justify="center">
          <div className="player-card-quotation-title">QUOTAZIONE</div>
        </Row>
        <Row style={{ marginTop: 20 }} align="middle" justify="center">
          <Col xs={12}>
            <div className="player-card-quotation-actual-title">ATTUALE</div>
            <div className="player-card-quotation-actual-value">
              {props.player.actualQuotation}
            </div>
          </Col>
          <Col xs={11} offset={1}>
            <div className="player-card-quotation-actual-title">INIZIALE</div>
            <div className="player-card-quotation-actual-value">
              {props.player.initialQuotation}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
}
