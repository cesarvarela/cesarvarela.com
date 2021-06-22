import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    transition: all 0.25s linear;
    
    @media screen and (prefers-color-scheme: dark) {
      background: #333;
      color: #fff;
    }
  }

  main {
    transition: all 0.25s linear;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`