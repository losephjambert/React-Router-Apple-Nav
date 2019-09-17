import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import NavContainer from './components/Nav/NavContainer';
import SubNav from './components/Nav/SubNavContainer';

import { mainNavItems, subNavItems } from './api/navDataStub';

function App() {
  const [subNav, setSubNav] = useState([]);
  const [navItems] = useState(mainNavItems);

  const onNavChange = title => {
    setSubNav(subNavItems[title] || []);
  };

  return (
    <>
      <NavContainer navItems={navItems} onNavChange={onNavChange} subNav={subNav} />
    </>
  );
}

export default App;
