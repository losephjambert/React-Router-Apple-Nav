import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mainNavItems, subNavItems } from '../../api/navDataStub';

export default function NavContainer() {
  const [navItems, setNavItems] = useState(mainNavItems);

  return (
    <ul>
      {navItems.map(({ title, href }, i) => (
        <li key={`_${i}_`}>
          <Link to={href.toLowerCase()}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
