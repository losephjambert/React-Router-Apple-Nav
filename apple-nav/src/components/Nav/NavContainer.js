import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import SubNavContainer from './SubNavContainer';

export default function NavContainer({ navItems, onNavChange, subNav }) {
  return (
    <>
      <nav>
        <ul>
          {navItems.map(({ title, href }, i) => (
            <li key={`_${i}_`} onClick={() => onNavChange(title)}>
              <Link to={href.toLowerCase()}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {subNav && <SubNavContainer subNav={subNav} />}
    </>
  );
}
