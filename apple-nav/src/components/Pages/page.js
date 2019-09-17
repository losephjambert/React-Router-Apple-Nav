import React from 'react';
import SubNav from '../Nav/SubNav';

const Page = ({ subNav, match, title }) => {
  return (
    <>
      <nav>
        <SubNav subNav={subNav} />
      </nav>
      <section>
        <h1>This is the page title: {title}</h1>
        <p>this is some page content</p>
      </section>
    </>
  );
};

export default Page;
