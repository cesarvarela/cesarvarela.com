import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    padding: 36px 0 12px;
`

export function Footer() {

    return <StyledFooter>
        <p>© 2021 Cesar Varela <span role="img" aria-label="waving hand">👋</span> Thanks for visiting!</p>
    </StyledFooter>
}