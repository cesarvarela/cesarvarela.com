import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`

    margin-top: 90px;
    text-align: center;

    & > h1, & > h2 {
        color: ${({ theme }) => theme.color};
        padding: 12px 24px 0;
        display: inline-block;
        margin: 0 auto;
        font-weight: 700;
        letter-spacing: -0.04em;
    }

    & > h1 {
        font-size: 54px;
    }

    & > h2 {
        font-size: 42px;
    }

    & > .content {
        padding-top: 12px;
        margin-left: 6px;
        margin-right: 6px;

        @media (min-width: 768px) {
            max-width: 768px;
            margin: auto;
        }
    }
`

export function Section({ id, title, subtitle, children, className }) {

    return <StyledSection id={id} className={className}>
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
    </StyledSection >
}