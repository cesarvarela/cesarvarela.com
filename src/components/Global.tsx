import { createGlobalStyle } from 'styled-components'
import { getColor } from '@/lib/theme'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${getColor('background')};
    color: ${getColor('foreground')};
    transition: all 0.50s linear;
  }
` 