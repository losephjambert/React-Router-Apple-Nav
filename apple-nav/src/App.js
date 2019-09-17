import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavContainer from './components/Nav/NavContainer';
import Page from './components/Pages/page';
import HomePage from './components/Pages/HomePage';

import { mainNavItems, subNavItems } from './api/navDataStub';

function App() {
  const [subNav, setSubNav] = useState([]);
  const [navItems, setNavItems] = useState(mainNavItems);

  const onNavChange = title => {
    setSubNav(subNavItems[title]);
  };

  return (
    <>
      <NavContainer navItems={navItems} onNavChange={onNavChange} />
      <Route exact path='/' component={HomePage} />
      <Route
        path='/:id'
        render={routerProps => <Page {...routerProps} title={routerProps.match.params.id} subNav={subNav} />}
      />
    </>
  );
}

export default App;
