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
`;
