import React from 'react'
import { Section } from '../Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faLinkedin, faGithub, faLastfm, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const iconsMap = {
    'stack-overflow': <FontAwesomeIcon icon={faStackOverflow} />,
    'linkedin': <FontAwesomeIcon icon={faLinkedin} />,
    'github': <FontAwesomeIcon icon={faGithub} />,
    'lastfm': <FontAwesomeIcon icon={faLastfm} />,
    'facebook': <FontAwesomeIcon icon={faFacebook} />,
    'twitter': <FontAwesomeIcon icon={faTwitter} />,
}

const List = styled.u`
    list-style-type: none;
    padding: 0;

    & > li {
      margin: 0;
      padding: 18px;
      display: inline-block;
    }
`

const Link = styled.a`
    color: ${({ theme }) => theme.color};
    font-size: 48px;
`

export function Social() {

    const { site: { siteMetadata: { socialItems: items } } } = useStaticQuery(graphql`
    query {
        site{
            siteMetadata {
                socialItems {
                    description
                    link
                    key
                }
            }
        }
    }`)

    return <Section id="social" subtitle="social">
        <List>
            {
                items.map((item, index) => {
                    return <li key={index} className="item">
                        <Link href={item.link} target="_blank" rel="noopener">
                            {iconsMap[item.key]}
                        </Link>
                    </li>
                })
            }
        </List>
    </Section>
}