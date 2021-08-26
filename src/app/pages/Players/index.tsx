/**
 *
 * Players
 *
 */
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Row, Tabs } from 'antd';
import { PlayerRandom } from 'app/components/PlayerRandom';
import { PlayerTable } from 'app/components/PlayerTable';
import { PlayerRole } from 'app/interfaces/common.interface';
import 'flag-icon-css/css/flag-icon.min.css';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAttackers,
  selectDefenders,
  selectKeepers,
  selectMidfilders,
} from '../LayoutContainer/slice/selectors';
import './players.css';
import { usePlayersSlice } from './slice';
import { selectPickedPlayers, selectSelectedTab } from './slice/selectors';
import { PlayerTabs } from './slice/types';

interface Props {}
const { TabPane } = Tabs;

export const Players = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const { actions } = usePlayersSlice();

  const dispatch = useDispatch();
  const selectedTab = useSelector(selectSelectedTab);
  //const allPlayers = useSelector(selectPlayers);
  const keepers = useSelector(selectKeepers);
  const defenders = useSelector(selectDefenders);
  const midfielders = useSelector(selectMidfilders);
  const attackers = useSelector(selectAttackers);
  const pickedPlayers = useSelector(selectPickedPlayers);
  const tabs = [
    {
      id: PlayerTabs.keeper,
      name: 'Portieri',
      dataSource: keepers,
      role: PlayerRole.keeper,
    },
    {
      id: PlayerTabs.defender,
      name: 'Difensori',
      dataSource: defenders,
      role: PlayerRole.defender,
    },
    {
      id: PlayerTabs.midfielder,
      name: 'Centrocampisti',
      dataSource: midfielders,
      role: PlayerRole.midfielder,
    },
    {
      id: PlayerTabs.attacker,
      name: 'Attaccanti',
      dataSource: attackers,
      role: PlayerRole.attacker,
    },
  ];

  useEffect(() => {
    dispatch(actions.setSelectedTab(tabs[0]));
    //loadPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const loadPlayers = () => {
    dispatch(actions.loadPlayers());
  };*/

  const onChangeTab = key => {
    const selectedTab = tabs.filter(tab => tab.id === key);
    if (selectedTab && selectedTab.length > 0) {
      dispatch(actions.setSelectedTab(selectedTab[0]));
    }
  };

  const generateResetButton = () => {
    return (
      <Button
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={() => dispatch(actions.resetSelectedPlayer(selectedTab.role))}
        size="large"
      >
        Reset {selectedTab.name}
      </Button>
    );
  };

  const generateTabPane = () => {
    return tabs.map(tab => (
      <TabPane tab={tab.name} key={tab.id}>
        <Row style={{ width: '100%' }}>
          <Col xs={12}>
            <PlayerTable dataSource={tab.dataSource} />
          </Col>
          <Col xs={11} offset={1}>
            <PlayerRandom
              selectedTab={selectedTab}
              pickedPlayers={pickedPlayers}
            />
          </Col>
        </Row>
      </TabPane>
    ));
  };

  return (
    <Row style={{ width: '100%' }}>
      <Col xs={24}>
        <Tabs
          defaultActiveKey="1"
          activeKey={selectedTab.id}
          onChange={onChangeTab}
          tabBarExtraContent={generateResetButton()}
        >
          {generateTabPane()}
        </Tabs>
      </Col>
    </Row>
  );
});
