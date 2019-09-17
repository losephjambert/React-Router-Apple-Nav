import React from 'react';
import NavContainer from './Nav/NavContainer';

export default function Page({ title, match, mainNavItems, subNavItems }) {
  return (
    <>
      <NavContainer mainNavItems={mainNavItems} subNavItems={subNavItems} match={match} />
      <div>This is the {title} page</div>
    </>
  );
}