import { createGlobalStyle } from 'styled-components'
import { getColor } from '@/lib/theme'

export const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${getColor('background')};
    color: ${getColor('foreground')};
    transition: all 0.50s linear;
  }
  
  a {
    color: ${getColor('foreground')};
  }
` 