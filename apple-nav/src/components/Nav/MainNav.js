import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={`_${i}_`}>
            {' '}
            <Link to={item.url.toLowerCase()}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainNav;
