import React from 'react';

const Button = props => {
  return (
    <button onClick={props.onClick} style={{}}>
      {props.children}
    </button>
  );
};

export default Button;
