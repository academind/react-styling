import React from 'react';
import styled from 'styled-components';

import UserSummary from './components/UserSummary';

const StyledDiv = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
`;

function App() {
  return (
    <StyledDiv>
      <UserSummary />
      <button>Don't click me</button>
    </StyledDiv>
  );
}

export default App;
