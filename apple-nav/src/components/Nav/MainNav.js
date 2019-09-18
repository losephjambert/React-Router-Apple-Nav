import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const MainNav = ({ navItems }) => {
  if (!navItems) return null;

  return (
    <StyledMainNav>
      <StyledNavWrapper>
        {navItems.map(item => (
          <NavLink exact key={item.id} to={`/${item.url.toLowerCase()}`} activeClassName={'active'}>
            {item.title}
          </NavLink>
        ))}
      </StyledNavWrapper>
    </StyledMainNav>
  );
};

export default MainNav;
