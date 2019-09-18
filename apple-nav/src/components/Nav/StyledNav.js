import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const StyledNavWrapper = styled.nav`
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    &:hover {
      opacity: 0.8;
    }
  }
  a.active {
    opacity: 0.8;
  }

  &:first-of-type > a:first-child,
  &:first-of-type > a:last-child {
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
  }
`;
