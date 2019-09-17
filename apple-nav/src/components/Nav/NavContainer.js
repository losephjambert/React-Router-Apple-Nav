import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function NavContainer({ navItems, onNavChange }) {
  return (
    <ul>
      {navItems.map(({ title, href }, i) => (
        <li key={`_${i}_`} onClick={() => onNavChange(title)}>
          <Link to={href.toLowerCase()}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
