import React from 'react';
import styled from 'styled-components';

const StyledPageWrapper = styled.div``;

export default function Page({ title }) {
  return (
    <StyledPageWrapper>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>content and stuff</p>
      </main>
      <footer>
        <p>footer content and stuff</p>
      </footer>
    </StyledPageWrapper>
  );
}
