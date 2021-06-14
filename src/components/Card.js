import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledCard = styled.div`
    border: 1px solid #c4c4c4;
    text-align: left;
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
        color: ${({ theme }) => theme.color};
    }
`

export default function Card({ src, title, description, href, img }) {

    const image = getImage(img)

    return <StyledCard className="card">

        <GatsbyImage image={image} alt="project image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} target="_blank" rel="noopener noreferrer">View more <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    </StyledCard>
}