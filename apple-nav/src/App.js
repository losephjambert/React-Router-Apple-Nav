import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavContainer from './components/Nav/NavContainer';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

function App() {
  const [subNavItems, setSubNavItems] = useState(sub);
  const [mainNavItems] = useState(main);

  // const onNavChange = id => {
  //   setSubNavItems(sub.find(items => items.id === id) || []);
  // };

  return (
    <>
      <Route
        exact
        path='/'
        render={routerProps => <NavContainer mainNavItems={mainNavItems} subNavItems={subNavItems} {...routerProps} />}
      />
      <Route
        path='/:url'
        render={routerProps => <NavContainer mainNavItems={mainNavItems} subNavItems={subNavItems} {...routerProps} />}
      />
    </>
  );
}

export default App;
