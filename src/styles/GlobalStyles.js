import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style: none;
  }
  input {
    outline: none;
  }
  
  button {
    outline: none;
    border: none;
  }
`;

export default GlobalStyles;
