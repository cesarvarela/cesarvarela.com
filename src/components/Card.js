import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getColor, getProp } from '../lib/theme';
import External from '../svg/external.svg'

const StyledCard = styled.div`
    text-align: left;
    box-shadow: ${getProp('card', 'boxShadow')};
    border-radius: 6px;
    background: ${getColor('background')};
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .image {
        border-bottom: 1px solid ${getColor('foreground')};
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
        color: ${getColor('foreground')};
        svg {
            width: 12px;
            height: 12px;
            margin-left: 6px;
            vertical-align: middle;
            path  {
                fill: ${getColor('foreground')};
            }
        }
    }
`

export default function Card({ src, title, description, link, img }) {

    const image = getImage(img)

    return <StyledCard className="card">
        <GatsbyImage image={image} alt="project image" className="image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View more <External /></a>
    </StyledCard>
}