import styled from 'styled-components';

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  border: 1px solid blue;
  background: blue;
  color: white;
  padding: 0.5rem 2rem;

  :focus {
    outline: none;
  }

  :hover, :active {
    background: lightblue;
    color: blue;
    border-color: lightblue;
  }
`;

export default Button;
