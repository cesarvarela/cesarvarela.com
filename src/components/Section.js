import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`

    margin-top: 90px;
    text-align: center;

    & > h1, & > h2 {
        background: ${({ theme }) => theme.color};
        color: ${({ theme }) => theme.background};
        padding: 12px 24px;
        display: inline-block;
        margin: 0 auto;
        text-transform: lowercase;
    }

    & > h1 {
        font-size: 54px;
    }

    & > h2 {
        font-size: 36px;
    }

    & > .content {
        padding-top: 72px;

        @media (min-width: 768px) {
            max-width: 700px;
            margin: auto;
        }
    }
`

export function Section({ id, title, subtitle, children }) {

    return <StyledSection id={id}>
        {
            title &&
            <h1>{title}</h1>
        }

        {
            subtitle &&
            <h2>{subtitle}</h2>
        }

        <div className="content">
            {children}
        </div>
    </StyledSection>
}