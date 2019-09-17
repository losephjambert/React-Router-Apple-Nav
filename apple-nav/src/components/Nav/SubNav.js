import React from 'react';

const SubNav = ({ subNav }) => {
  return (
    <>
      <ul>
        {subNav.map((item, i) => (
          <li key={`_${i}_`}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default SubNav;
