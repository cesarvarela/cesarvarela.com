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

export function Projects() {

    const { items } = useStaticQuery(graphql`query MyQuery {
        items: allProjectsJson {
          nodes {
            description
            link
            key
            title
            img {
              childImageSharp {
                gatsbyImageData(backgroundColor:"#FFFFFF", layout: FULL_WIDTH, aspectRatio: 2, transformOptions:{cropFocus: CENTER})
              }
            }
          }
        }
      }
      `)

    console.log(items)

    return <Section id="projects" subtitle="Latest Projects">
        <Cards>
            {
                items.nodes.map(node => <Card
                    {...node}
                />)
            }
        </Cards>
    </Section>
}