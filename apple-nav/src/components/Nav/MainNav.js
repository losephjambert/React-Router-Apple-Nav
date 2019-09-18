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
export default function MainNav({ mainNavItems }) {
  return (
    <StyledMainNav>
      <StyledNavWrapper>
        {mainNavItems.map(item => (
          <NavLink key={item.id} activeClassName='active' to={`/${item.url.toLowerCase()}`}>
            {item.title}
          </NavLink>
        ))}
      </StyledNavWrapper>
    </StyledMainNav>
  );
}
