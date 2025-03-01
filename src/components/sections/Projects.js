import React, { useState, useEffect } from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import Card from '../Card'
import projectsJson from '../../data/projects.json'

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
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Transform the project data to use the correct image paths
    const transformedProjects = projectsJson.map(project => ({
      ...project,
      img: { 
        src: project.img.replace('../images', '/images') 
      }
    }));
    
    setProjects(transformedProjects);
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