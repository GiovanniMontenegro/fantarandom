/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { createBrowserHistory, createHashHistory } from 'history';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Route, Router, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import './app.css';
import { MyLayout } from './components/Layout';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Players } from './pages/Players/Loadable';

export const isElectron = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.indexOf(' electron/') !== -1;
};

export const history = isElectron()
  ? createHashHistory()
  : createBrowserHistory();

export function App() {
  const { i18n } = useTranslation();

  return (
    <Router history={history}>
      <Helmet
        titleTemplate="%s - FantaRandom"
        defaultTitle="FantaRandom"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A FantaRandom application" />
      </Helmet>

      <Switch>
        <RouteWrapper exact path="/" component={Players} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

const RouteWrapper = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <MyLayout {...props}>
          <Component {...props} />
        </MyLayout>
      )}
    />
  );
};
