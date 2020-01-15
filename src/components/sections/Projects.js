import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import Card from '../Card'
import { useStaticQuery, graphql } from "gatsby"

const Cards = styled.div`
    margin: 12px auto 0;

    @media (min-width: 768px) {
        display: flex;
    }

    & > .card {
        margin: 12px;
        @media (min-width: 768px) {
            flex: 1;
        }
    }
`

const context = require.context("../../images/projects", true, /^\.\/.*\.png$/)

export function Projects() {

    const { site: { siteMetadata: { projectItems: items } } } = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                projectItems {
                    key
                    link
                    img
                    title
                    description
                }
            }
        }
    }`)

    return <Section id="projects" subtitle="Latest Projects">
        <Cards>
            {
                items.map((item) => <Card
                    key={item.title}
                    src={context(item.img)}
                    title={item.title}
                    description={item.description}
                    href={item.link}
                />)
            }
        </Cards>
    </Section>
}