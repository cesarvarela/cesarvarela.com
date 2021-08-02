import styled from 'styled-components'
import { getColor } from '../lib/theme'

export default styled.a`
    border-radius: 5px;
    border: none;
    color: ${getColor('background')};
    background: ${getColor('foreground')};
    padding: 18px;
    text-decoration: none;
    display: inline-block;
`