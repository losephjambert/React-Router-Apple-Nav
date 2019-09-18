import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

import Page from './components/Page';
import MainNav from './components/Nav/MainNav';
import SubNav from './components/Nav/SubNav';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

const StyledRouteWrapper = styled.div`
  &.fade-enter {
    opacity: 0;
    div > nav {
      transform: translate3d(10vw, 0, 0);
    }
  }
  &.fade-enter.fade-enter-active {
    transition: 300ms;
    opacity: 1;
    div > nav {
      transition: 300ms;
      transform: translate3d(0, 0, 0);
    }
  }
  &.fade-enter-done {
  }
  &.fade-exit {
    background: green;
    opacity: 0;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`;

function App() {
  const [subNavItems, setSubNavItems] = useState(sub);
  const [mainNavItems] = useState(main);

  /**
   * You can nest components in the render function in a Route component.
   * So, since our NavContainer needs router props to do its work,
   * we can add the NavContainer to the Route render instead of
   * adding it to every page. Still repeating ourselves, but at least
   * we don't have to pass the nav props down to the pages.
   */

  return (
    <Route
      render={({ location }) => (
        <>
          <MainNav mainNavItems={mainNavItems} />
          <TransitionGroup>
            <CSSTransition timeout={300} classNames={'fade'} key={location.key}>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => (
                    <StyledRouteWrapper>
                      <Page title={'home'} />
                    </StyledRouteWrapper>
                  )}
                />
                <Route
                  exact
                  path='/:url'
                  render={routerProps => (
                    <StyledRouteWrapper>
                      <SubNav
                        navItems={subNavItems.find(item => item.url.toLowerCase() === routerProps.match.params.url)}
                        url={routerProps.match.params.url}
                      />
                      <Page title={routerProps.match.params.url} />
                    </StyledRouteWrapper>
                  )}
                />
                <Route
                  path='/:url/:type'
                  render={routerProps => (
                    <StyledRouteWrapper>
                      <SubNav
                        navItems={subNavItems.find(item => item.url.toLowerCase() === routerProps.match.params.url)}
                        url={routerProps.match.params.url}
                      />
                      <Page title={`${routerProps.match.params.url}: ${routerProps.match.params.type}`} />
                    </StyledRouteWrapper>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    />
  );
}

export default App;
