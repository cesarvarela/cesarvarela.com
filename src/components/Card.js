import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const StyledCard = styled.div`
    border: 1px solid #c4c4c4;
    text-align: left;
    & > .image {
        background-size: cover;
        padding-bottom: 50%;
        background-position: center;
        border-bottom: 1px solid #c4c4c4;
    }
    & > h3 {
        padding: 12px;
        margin: 0;
    }
    & > p {
        padding: 12px;
        margin: 0;
    }
    & > a {
        padding: 12px;
        margin: 0;
        text-decoration: none;
        display: block;
        color: $text-dark;
    }
`

export default function Card({ src, title, description, href }) {

    return <StyledCard>
        <div className="image" style={{ backgroundImage: `url(${src})` }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} target="_blank">View more <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    </StyledCard>
}