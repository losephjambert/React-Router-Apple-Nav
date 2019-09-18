import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './components/Page';
import NavContainer from './components/Nav/NavContainer';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

function App() {
  const [subNavItems] = useState(sub);
  const [mainNavItems] = useState(main);

  return (
    <>
      <NavContainer mainNavItems={mainNavItems} subNavItems={subNavItems} />
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
