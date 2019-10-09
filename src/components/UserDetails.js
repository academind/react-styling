import React from 'react';

import StyledParagraph from './StyledParagraph';

const UserDetails = props => {
  return (
    <div>
      <StyledParagraph>
        <strong>Name</strong>: {props.name}, <strong>Age</strong>: {props.age}
      </StyledParagraph>
      <p>My name is {props.name} - and these are my details.</p>
    </div>
  );
};

export default UserDetails;
