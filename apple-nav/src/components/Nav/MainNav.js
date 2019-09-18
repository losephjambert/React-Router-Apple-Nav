import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavContainer({ mainNavItems }) {
  return (
    <nav>
      {mainNavItems.map(item => (
        <NavLink key={item.id} exact activeClassName='active' to={`/${item.url.toLowerCase()}`}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
