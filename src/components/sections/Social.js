import React from 'react'
import { Section as SectionBase } from '../Section'

import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import picture from '../../images/po.png'

import StackOverflow from '../../svg/stackoverflow.svg'
import Linkedin from '../../svg/linkedin.svg'
import Github from '../../svg/github.svg'
import Lastfm from '../../svg/lastfm.svg'
import Facebook from '../../svg/facebook.svg'
import Twitter from '../../svg/twitter.svg'

const iconsMap = {
    'stack-overflow': <StackOverflow />,
    'linkedin': <Linkedin />,
    'github': <Github />,
    'lastfm': <Lastfm />,
    'facebook': <Facebook />,
    'twitter': <Twitter />,
}

const List = styled.u`
    list-style-type: none;
    padding: 0;

    li {
      margin: 0;
      padding: 6px;
      display: inline-block;
        svg {
            width: 32px;
            height: 32px;
            path {
                fill: #fff;
            }
        }
    }
`

const Link = styled.a`
    color: #fff;
    font-size: 32px;
`

const Chat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 60px 60px 0;
`

const Bubble = styled.div`
    background: #2388FF;
    border-radius: 8px;
    width: max-content;
    padding: 12px;
    color: #fff;
    margin: 3px 0;
    position: relative;
`

const Avatar = styled.div`
    position: absolute;
    right: -48px;
    bottom: 5px;
    width: 32px;
    height: 32px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 100%;
    }
`

const Status = styled.div`
    position: absolute;
    right: 8px;
    bottom: -24px;
    color: #5E5E5E;
    font-size: 12px;
`

const Section = styled(SectionBase)`

    ${Chat} {
        margin-top: 60px;
    }

    @media (min-width: 768px) {
        ${List} {
            li {
                padding: 12px;
                svg {
                    width: 48px;
                    height: 48px;
                }
            }
        }
    }
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

    return <Section id="social" subtitle="Social">
        <Chat>
            <Bubble>Let's network!</Bubble>
            <Bubble>
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
                <Avatar>
                    <img src={picture} alt="po face" />
                </Avatar>
                <Status>Cesar Varela, just now.</Status>
            </Bubble>
        </Chat>
    </Section>
}