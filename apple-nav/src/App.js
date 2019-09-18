import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomePage from './components/HomePage';
import Page from './components/Page';
import NavContainer from './components/Nav/NavContainer';

import { mainNavItems as main, subNavItems as sub } from './api/navDataStub';

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
    <>
      <Switch>
        <Route
          exact
          path='/'
          render={routerProps => (
            <HomePage title={'home'} mainNavItems={mainNavItems} subNavItems={subNavItems} {...routerProps} />
          )}
        />
        <Route
          exact
          path='/:url'
          render={routerProps => (
            <Page
              mainNavItems={mainNavItems}
              subNavItems={subNavItems}
              {...routerProps}
              title={routerProps.match.params.url}
            />
          )}
        />
        <Route
          path='/:url/:type'
          render={routerProps => (
            <Page
              mainNavItems={mainNavItems}
              subNavItems={subNavItems}
              {...routerProps}
              title={`${routerProps.match.params.url}: ${routerProps.match.params.type}`}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
