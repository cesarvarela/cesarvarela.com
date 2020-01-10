import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    text-align: center;
    margin: 50px auto 20px;
`

export function Footer() {

    return <StyledFooter>
        <p>© 2020 Cesar Varela 👋 Thanks for visiting!</p>
    </StyledFooter>
}