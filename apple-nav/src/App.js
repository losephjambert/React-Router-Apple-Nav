import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavContainer from './components/Nav/NavContainer';
import Page from './components/Pages/page';
import HomePage from './components/Pages/HomePage';

import { subNavItems } from './api/navDataStub';

function App() {
  const [subNavItems, setSubNavItems] = useState([]);

  const onNavChange = title => {
    subNavItems[title] ? setSubNavItems(subNavItems[title]) : setSubNavItems([]);
  };
  return (
    <>
      <NavContainer />
      <Route exact path='/' component={HomePage} />
      <Route
        path='/:id'
        render={routerProps => <Page {...routerProps} subNavItems={subNavItems} onNavChange={onNavChange} />}
      />
    </>
  );
}

export default App;
