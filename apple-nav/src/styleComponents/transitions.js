import styled from 'styled-components';

export const StyledRouteWrapper = styled.div`
  .fade-enter {
    opacity: 0;
    nav {
      transform: translate3d(10vw, 0, 0);
    }
  }
  .fade-enter.fade-enter-active {
    transition: 300ms;
    opacity: 1;
    nav {
      transition: 300ms;
      transform: translate3d(0, 0, 0);
    }
  }
  .fade-enter-done {
  }
  .fade-exit {
    display: none;
  }
`;
