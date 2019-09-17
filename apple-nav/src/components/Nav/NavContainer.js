import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import SubNav from './SubNav';
import MainNav from './MainNav';

export default function NavContainer({ mainNavItems, subNavItems, match }) {
  const { url } = match.params;
  const items = subNavItems.find(item => item.url.toLowerCase() === url);
  return (
    <>
      <nav>
        <ul>
          <MainNav items={mainNavItems} />
        </ul>
      </nav>
      {items && (
        <nav>
          <Route path={`/${url}`} render={() => <SubNav items={items.items} />} />
        </nav>
      )}
    </>
  );
}
