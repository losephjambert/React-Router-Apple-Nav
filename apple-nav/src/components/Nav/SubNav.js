import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNav = ({ navItems, url }) => {
  if (!navItems) return null;

  return (
    <>
      {navItems.items.map((item, i) => (
        <NavLink
          to={`/${url}/${item.title
            .toLowerCase()
            .split(' ')
            .join('-')}`}
          exact
          activeClassName='active'
          key={`_${i}_`}>
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

export default SubNav;
