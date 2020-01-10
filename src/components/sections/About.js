import React from 'react'
import { Section } from '../Section'
import cv from '../../downloads/cesarvarela.com-CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ListCard from '../ListCard'
import styled from 'styled-components'

const Cards = styled.div`
    margin: 36px auto 0;
    @media (min-width: 768px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    & > .list-card {
        @media (min-width: 768px) {
            width: 40%;
        }        
        margin: 12px;
    }
`

const Description = styled.p`
    font-size: 24px;
    margin: 0 auto;
`

const CVLink = styled.a`
    margin-top: 36px;
    color:  ${({ theme }) => theme.color};
    text-decoration: none;
    display: inline-block;
`

export function About({ skills }) {

    return <Section id="about" subtitle="tech">
        <div className="skills">
            <Description className="description">Over the years I've worked on <b>many</b> different projects each with different requirements and challenges, here are some of the tools that helped me</Description>
            <Cards>
                {
                    skills.map((skillList) => <ListCard title={skillList.name} items={skillList.items} />)
                }
            </Cards>
        </div>
        <CVLink href={cv} download>You can also download my CV here <FontAwesomeIcon icon={faDownload} /></CVLink>
    </Section>
}