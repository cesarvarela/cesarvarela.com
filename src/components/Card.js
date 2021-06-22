import React from 'react'
import { View } from 'grommet-icons';
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StyledCard = styled.div`
    text-align: left;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 6px;
    background: ${({ theme }) => theme.backgropund};
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .image {
        border-bottom: 1px solid ${({ theme }) => theme.border};
    }

   h3 {
        padding: 18px 18px 0;
        margin: 0;
    }
    p {
        padding: 18px;
        margin: 0;
        flex: 1;
    }
    a {
        padding: 18px;
        margin: 0;
        text-decoration: none;
        display: block;
        color: ${({ theme }) => theme.color};
        svg {
            margin-left: 6px;
            vertical-align: middle;
        }
    }
`

export default function Card({ src, title, description, link, img }) {

    const image = getImage(img)

    return <StyledCard className="card">
        <GatsbyImage image={image} alt="project image" className="image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View more <View size="medium" /></a>
    </StyledCard>
}