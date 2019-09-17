import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  a {
    color: grey;
    text-decoration: none;
    &.active {
      color: green !important;
    }
    &:visited {
      color: grey;
    }
  }
`;

const MainNav = ({ items }) => {
  return (
    <>
      <StyledNav>
        {items.map((item, i) => (
          <NavLink exact key={`_${i}_`} activeClassName='active' to={item.url.toLowerCase()}>
            {item.title}
          </NavLink>
        ))}
      </StyledNav>
    </>
  );
};

export default MainNav;
