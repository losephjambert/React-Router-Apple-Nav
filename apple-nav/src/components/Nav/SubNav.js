import React from 'react';

const SubNav = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={`_${i}_`}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default SubNav;
