import React, { useState, useEffect } from 'react'
import { Section } from '../Section'
import Card from '../Card'
import projectsJson from '../../data/projects.json'
import { Project } from '../../types/data'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Transform the project data to use the correct image paths
    const transformedProjects: Project[] = projectsJson.map(project => ({
      ...project,
      img: project.img.replace('../images', '/images')
    }));
    
    setProjects(transformedProjects);
  }, []);

  return (
    <Section id="projects" subtitle="Projects">
      <div className="mt-3 mx-auto md:flex md:flex-wrap md:justify-between">
        {
          projects.map(project => (
            <div key={project.key} className="m-3 md:m-[4%] md:w-[40%]">
              <Card {...project} />
            </div>
          ))
        }
      </div>
    </Section>
  );
}