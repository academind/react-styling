import React from 'react';

const UserDetails = props => {
  return (
    <div>
      <p style={{color: '#aaa'}}>
        <strong>Name</strong>: {props.name}, <strong>Age</strong>: {props.age}
      </p>
      <p>My name is {props.name} - and these are my details.</p>
    </div>
  );
};

export default UserDetails;
