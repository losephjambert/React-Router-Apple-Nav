import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Route } from 'react-router-dom';

import SubNav from './SubNav';

import { StyledNavWrapper } from './StyledNav';
const StyledMainNav = styled.div`
  background-color: #313131;
  color: ghostwhite;
  nav {
    display: flex;
    justify-content: space-around;
    padding: 0 15%;
    a {
      padding: 10px 0;
    }
  }
`;
function MainNav(props) {
  const [activeId, setActiveId] = useState(3);

  const {
    mainNavItems,
    subNavItems,
    location: { pathname },
  } = props;

  const handleClick = id => {
    console.log('handle click', id);
    setActiveId(id);
  };

  return (
    <>
      <StyledMainNav>
        <StyledNavWrapper>
          {mainNavItems.map(item => (
            <NavLink
              key={item.id}
              to={`/${item.url.toLowerCase()}`}
              onClick={() => handleClick(item.id)}
              className={`${activeId === item.id ? 'active' : null}`}>
              {item.title}
            </NavLink>
          ))}
        </StyledNavWrapper>
      </StyledMainNav>
      <StyledNavWrapper>
        <Route
          exact
          path='/:url'
          render={routerProps => (
            <SubNav
              {...routerProps}
              navItems={subNavItems.find(item => item.url.toLowerCase() === routerProps.match.params.url)}
              url={routerProps.match.params.url}
            />
          )}
        />
        <Route
          exact
          path='/:url/:type'
          render={routerProps => (
            <SubNav
              {...routerProps}
              navItems={subNavItems.find(item => item.url.toLowerCase() === routerProps.match.params.url)}
              url={routerProps.match.params.url}
            />
          )}
        />
      </StyledNavWrapper>
    </>
  );
}

export default withRouter(MainNav);
