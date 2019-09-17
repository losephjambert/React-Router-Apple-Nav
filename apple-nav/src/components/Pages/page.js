import React from 'react';
import SubNav from '../Nav/SubNav';

const Page = props => {
  return (
    <>
      <nav>
        <SubNav />
      </nav>
      <section>
        <h1>This is the page title: TITLE</h1>
        <p>this is some page content</p>
      </section>
    </>
  );
};

export default Page;
