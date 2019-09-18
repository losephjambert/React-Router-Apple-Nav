import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { StyledRouteWrapper } from '../styleComponents/transitions';
const StyledPageWrapper = styled.div`
  /* background: salmon; */
`;

export default function Page({ title, location }) {
  return (
    <StyledRouteWrapper>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames={'fade'} key={location.key}>
          <StyledPageWrapper>
            <header>
              <h1>{title}</h1>
            </header>
            <main>
              <p>content and stuff</p>
            </main>
            <footer>
              <p>footer content and stuff</p>
            </footer>
          </StyledPageWrapper>
        </CSSTransition>
      </TransitionGroup>
    </StyledRouteWrapper>
  );
}
