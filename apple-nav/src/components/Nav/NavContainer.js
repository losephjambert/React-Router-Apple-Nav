import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import SubNav from './SubNav';
import MainNav from './MainNav';

export default function NavContainer({ mainNavItems, subNavItems, match }) {
  const { url } = match.params;
  const items = subNavItems.find(item => item.url.toLowerCase() === url);
  return (
    <>
      <nav>
        {mainNavItems.map(item => (
          <NavLink key={item.id} exact activeClassName='active' to={`/${item.url.toLowerCase()}`}>
            {item.title}
          </NavLink>
        ))}
      </nav>
      {items && (
        <nav>
          <Route path={`/${url}`} render={() => <SubNav items={items.items} url={url} />} />
        </nav>
      )}
    </>
  );
}
