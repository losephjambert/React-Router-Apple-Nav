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
          {mainNavItems.map(({ title, url, id }) => (
            <li key={`_${id}_`}>
              <Link to={url.toLowerCase()}>{title}</Link>
            </li>
          ))}
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
