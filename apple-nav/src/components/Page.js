import React from 'react';

export default function Page(props) {
  const { title, match } = props;
  return (
    <>
      <div>This is the {title} page</div>
    </>
  );
}
