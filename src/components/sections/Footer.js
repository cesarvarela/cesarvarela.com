import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    margin: 50px auto 20px;
`

export function Footer() {

    return <StyledFooter>
        <p>© 2020 Cesar Varela <span role="img" aria-label="waving hand">👋</span> Thanks for visiting!</p>
    </StyledFooter>
}