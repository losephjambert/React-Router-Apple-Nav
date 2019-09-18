import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SubNav from './SubNav';

import { StyledNavWrapper } from './StyledNav';
import { StyledRouteWrapper } from '../../styleComponents/transitions';

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
  const { mainNavItems, subNavItems, location } = props;

  return (
    <>
      <StyledMainNav>
        <StyledNavWrapper>
          {mainNavItems.map(item => (
            <NavLink key={item.id} to={`/${item.url.toLowerCase()}`} activeClassName={'active'}>
              {item.title}
            </NavLink>
          ))}
        </StyledNavWrapper>
      </StyledMainNav>
      <StyledRouteWrapper>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames={'fade'} key={location.key}>
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
          </CSSTransition>
        </TransitionGroup>
      </StyledRouteWrapper>
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
    </>
  );
}

export default withRouter(MainNav);
