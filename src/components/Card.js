import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { getColor } from '../lib/theme';
import External from '../svg/external.svg'

const StyledCard = styled.div`
    text-align: left;
    box-shadow: var(--boxShadow);
    border-radius: 6px;
    background: var(--color-background);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .image {
        border-bottom: 1px solid var(--color-foreground);
        position: relative;
        width: 100%;
        height: 200px;
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
    return <StyledCard className="card">
        <div className="image">
            {img && <Image 
                src={img.src || img.childImageSharp?.gatsbyImageData.images.fallback.src || '/placeholder.png'} 
                alt="project image"
                fill
                style={{ objectFit: 'cover' }}
            />}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View more <External /></a>
    </StyledCard>
}