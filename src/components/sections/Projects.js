import React, { useState, useEffect } from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import Card from '../Card'

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

// Mock data for projects - in a real app, you would fetch this from an API or import from a JSON file
const projectsData = [
  {
    key: "project1",
    title: "Project 1",
    description: "Description for project 1",
    link: "https://example.com/project1",
    img: { src: "/images/placeholder.png" }
  },
  {
    key: "project2",
    title: "Project 2",
    description: "Description for project 2",
    link: "https://example.com/project2",
    img: { src: "/images/placeholder.png" }
  }
];

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // For now, we'll use the mock data
    setProjects(projectsData);
  }, []);

  return <Section id="projects" subtitle="Projects">
    <Cards>
      {
        projects.map(project => <Card
          key={project.key}
          {...project}
        />)
      }
    </Cards>
  </Section>
}