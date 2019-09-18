import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SubNav from './SubNav';
import MainNav from './MainNav';
import { StyledRouteWrapper } from '../../styleComponents/transitions';

function NavContainer(props) {
  const { mainNavItems, subNavItems, location } = props;

  return (
    <>
      <MainNav navItems={mainNavItems} />
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

export default withRouter(NavContainer);
