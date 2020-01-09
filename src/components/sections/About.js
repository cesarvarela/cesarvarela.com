import React from 'react'
import { Section } from '../Section'
import ToolCard from '../ToolCard'
import cv from '../../downloads/cesarvarela.com-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export function About({ skills }) {

    return <Section id="about" subtitle="tech">
        <div className="skills">
            <p className="description">Over the years I've worked on <b>many</b> different projects each with different requirements and challenges, here are some of the tools that helped me</p>

            <div className="tool-cards">
                {
                    skills.map((skillList) => <ToolCard title={skillList.name} items={skillList.items} />)
                }
            </div>
        </div>

        <h3 className="cv"><a href={cv} download>
            You can also download my CV here <FontAwesomeIcon icon={faDownload} /></a>
        </h3>
    </Section>
}