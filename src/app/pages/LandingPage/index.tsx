/**
 *
 * LandingPage
 *
 */
import { Col, Progress, Row } from 'antd';
import { styleVariables } from 'app/styles/variables';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { layoutContainerActions } from '../LayoutContainer/slice';
import { selectPlayers } from '../LayoutContainer/slice/selectors';
import { useLandingPageSlice } from './slice';
import { selectCaption, selectPercentage } from './slice/selectors';
import { LANDING_PAGE_STEPS } from './utils/landingPage.constants';

interface Props {}

export const LandingPage = memo((props: Props) => {
  const { actions } = useLandingPageSlice();
  const percentage = useSelector(selectPercentage);
  const caption = useSelector(selectCaption);
  const dispatch = useDispatch();
  const history = useHistory();
  const players = useSelector(selectPlayers);

  useEffect(() => {
    //CHECK IF DATA ARE IN
    if (navigator.onLine) {
      dispatch(layoutContainerActions.loadPlayers());
    } else if (players && players.length > 0) {
      goNextStep();
    } else {
      setTimeout(() => {
        dispatch(
          actions.setProgress({
            caption:
              'Al primo avvio è necessario internet. Connettiti e riprova!',
            percentage: 100,
          }),
        );
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const HALF_PERCENTAGE = 50;
    if (percentage === HALF_PERCENTAGE) {
      goTeams();
    }
  }, [percentage]);

  const goNextStep = () => {
    setTimeout(() => {
      dispatch(
        actions.setProgress({ caption: LANDING_PAGE_STEPS[1], percentage: 50 }),
      );
    }, 2000);
  };

  const goTeams = () => {
    setTimeout(() => {
      // history.push('/teams');
    }, 3000);
  };

  return (
    <Row className="landing-page-container" justify="center" align="middle">
      <Col xs={6}>
        <Row justify="center" align="middle">
          <Col className="landing-page-title">FANTARANDOM</Col>
        </Row>
        <Row justify="center" align="middle">
          <Col>
            <img
              src="logo-app.png"
              alt="logo-app"
              style={{ width: 350 }}
              className="landing-page-logo"
            />
          </Col>
        </Row>
        <Row justify="center" align="middle" className="landing-page-caption">
          <Col>{caption}</Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Progress
              percent={percentage}
              showInfo={false}
              strokeColor={styleVariables['primary-color']}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
});
