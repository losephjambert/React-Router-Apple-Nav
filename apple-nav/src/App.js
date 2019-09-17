import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Page from './components/Page';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

function App() {
  const [subNavItems, setSubNavItems] = useState(sub);
  const [mainNavItems] = useState(main);

  return (
    <>
      <Route
        exact
        path='/'
        render={routerProps => (
          <HomePage title={'home'} mainNavItems={mainNavItems} subNavItems={subNavItems} {...routerProps} />
        )}
      />
      <Route
        path='/:url'
        render={routerProps => (
          <Page
            mainNavItems={mainNavItems}
            subNavItems={subNavItems}
            {...routerProps}
            title={routerProps.match.params.url}
          />
        )}
      />
    </>
  );
}

export default App;
