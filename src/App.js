import React from 'react';

import UserSummary from './components/UserSummary';

function App() {
  return (
    <div
      style={{
        width: '90%',
        maxWidth: '40rem',
        margin: '2rem auto',
        border: '1px solid #ccc',
        padding: '1rem'
      }}
    >
      <UserSummary />
    </div>
  );
}

export default App;
