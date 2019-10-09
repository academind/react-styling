import React from 'react';

const Button = props => {
  return (
    <button
      onClick={props.onClick}
      style={{
        font: 'inherit',
        cursor: 'pointer',
        border: '1px solid blue',
        background: 'blue',
        color: 'white',
        padding: '0.5rem 2rem'
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
