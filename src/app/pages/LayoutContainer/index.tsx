/**
 *
 * LayoutContainer
 *
 */
/**
 *
 * Layout
 *
 */
import { WifiOutlined } from '@ant-design/icons';
import { Col, Layout, Row, Tooltip } from 'antd';
import * as React from 'react';
import './layout.css';

const { Header, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

export function LayoutContainer(props: Props) {
  /*const [state, setState] = React.useState({
    current: 'players',
  });*/

  // const history = useHistory();

  /*const handleClick = e => {
    console.log('click ', e);
    setState({ current: e.key });
    if (e.key !== history.location.pathname) {
      history.push(e.key);
    }
  };*/
  const color = `${navigator.onLine ? '#85dcba' : '#e27d60'}`;
  return (
    <Layout>
      <Header style={{ background: "url('campoVerde.jpg')" }}>
        <Row justify="space-between">
          <Col>
            <Row>
              <Col>
                <img
                  src="logo-app.png"
                  alt="logo app"
                  style={{ height: 150, width: 150, marginTop: '-53px' }}
                />
              </Col>
              <Col style={{ fontSize: 28, color: '#fff', fontWeight: 600 }}>
                FANTARANDOM
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="center" align="middle">
              <Col>
                <div className="connection-status">
                  <span>
                    <Tooltip
                      title={`Connessione ${navigator.onLine ? 'OK' : 'KO'}`}
                    >
                      <WifiOutlined
                        style={{
                          color: color,
                          fontSize: 30,
                          paddingTop: 6,
                          display: 'block',
                        }}
                      />
                    </Tooltip>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/*<Menu
          onClick={handleClick}
          selectedKeys={[state.current]}
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item key="players">Players</Menu.Item>
          <Menu.Item key="randomize">Randomize</Menu.Item>
        </Menu>*/}
      </Header>
      <Content
        style={{
          width: '100%',
          height: 'calc(100vh - 64px)',
          backgroundColor: '#fff',
        }}
      >
        <Layout className="site-layout-background">
          <Content style={{ padding: '0 100px', minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
