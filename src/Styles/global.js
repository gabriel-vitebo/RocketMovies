import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    color: ${({ theme }) => theme.COLORS.GRAY};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    background-color: ${({ theme }) => theme.COLORS.BG};
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`