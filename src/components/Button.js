import styled from 'styled-components'

export default styled.a`
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.color};
    padding: 18px;
    text-decoration: none;
    display: inline-block;
`