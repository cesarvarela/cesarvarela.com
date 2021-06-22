import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import Card from '../Card'
import { useStaticQuery, graphql } from "gatsby"

const Cards = styled.div`
    margin: 12px auto 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .card {
        margin: 12px;
        @media (min-width: 768px) {
            margin: 4%;
            width: 40%;
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

  return <Section id="projects" subtitle="Projects">
    <Cards>
      {
        items.nodes.map(node => <Card
          {...node}
        />)
      }
    </Cards>
  </Section>
}