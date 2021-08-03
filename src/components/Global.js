import { createGlobalStyle } from 'styled-components'
import { getColor } from '../lib/theme'

export const GlobalStyles = createGlobalStyle`
  html {
    transition: background-color 0.5s ease;
    background: ${getColor('background')};
    color: ${getColor('foreground')};
  }

  a {
    color: ${getColor('foreground')};
  }
`