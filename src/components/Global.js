import { createGlobalStyle } from 'styled-components'
import { getColor } from '../lib/theme'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    transition: all 0.25s linear;
    background: #333;
    @media screen and (prefers-color-scheme: dark) {
      background: #333;
      color: #fff;
    }
  }

  main {
    transition: all 0.25s linear;
    background:  ${getColor('background')};
    color: ${getColor('foreground')};
  }

  a {
    color: ${getColor('foreground')};
  }

  html, body, #___gatsby {
    height: 100%;
  }
`