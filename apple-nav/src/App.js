import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Page from './components/Page';
import MainNav from './components/Nav/MainNav';
import SubNav from './components/Nav/SubNav';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

function App() {
  const [subNavItems] = useState(sub);
  const [mainNavItems] = useState(main);

  return (
    <>
      <MainNav mainNavItems={mainNavItems} subNavItems={subNavItems} />
      <Switch>
        <Route exact path='/' render={({ location }) => <Page title={'home'} location={location} />} />
        <Route
          exact
          path='/:url'
          render={({ location, match }) => <Page title={match.params.url} location={location} />}
        />
        <Route
          exact
          path='/:url/:type'
          render={({ location, match }) => (
            <Page title={`${match.params.url}: ${match.params.type}`} location={location} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
