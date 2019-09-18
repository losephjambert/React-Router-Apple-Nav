import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { StyledNavWrapper } from './StyledNav';
const StyledSubNav = styled.div`
  color: #313131;
  nav {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    a {
      font-size: 0.8rem;
      text-align: center;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const StyledSubNavIconWrapper = styled.div`
  background-color: #ececec;
  width: 66px;
  height: 66px;
`;
const StyledSubNavText = styled.div``;

const SubNav = ({ navItems, url, match }) => {
  if (!navItems) return null;

  return (
    <StyledSubNav>
      <StyledNavWrapper>
        {navItems.items.map((item, i) => (
          <NavLink
            to={`/${url.toLowerCase()}/${item.title
              .toLowerCase()
              .split(' ')
              .join('-')}`}
            key={`_${i}_`}
            exact
            activeClassName='active'>
            <StyledSubNavIconWrapper></StyledSubNavIconWrapper>
            <StyledSubNavText>{item.title}</StyledSubNavText>
          </NavLink>
        ))}
      </StyledNavWrapper>
    </StyledSubNav>
  );
};

export default SubNav;
