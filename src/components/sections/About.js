import React from 'react'
import { Section as SectionBase } from '../Section'
import ListCard from '../ListCard'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Codewindow from '../CodeWindow'

const code = `class Cesar extends Human {

    languages() {

        return ['Javascript', 'Typescript', 'Swift', 'C#', 'ActionScript 3', 'PHP', 'GO']
    }

    frameworksAndLibraries() {

        return ['React', 'Angular', 'Express', 'Next.js', 'GraphQL']
    }

    stacksAndPlatforms() {

        return ['Node.js', 'iOS', '.NET', 'Unity 3D', 'MERN', 'Electron']
    }

    software() {

        return ['Visual Studio/VSCode', 'Xcode', 'Photoshop', 'Unity 3D', 'Sketch', 'Figma', 'Chrome DEV tools']
    }
}

//TODO: messed up SEO of this section but was totally worth it xD
`

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
    font-size: 18px;
    line-height: 22px;
    margin: 0 auto;
`

const Section = styled(SectionBase)`
    ${Codewindow} {
        margin: 42px auto 0;
    }
`

export function About() {

    const { site: { siteMetadata: { skills } } } = useStaticQuery(graphql`
    query{
        site {
            siteMetadata {
                skills {
                    name
                    items {
                        name
                    }
                }
            }
        }
    }`)

    return <Section subtitle="Tech">
        <Description>Over the years I've worked on <b>many</b> different projects each with different requirements and challenges, here are some of the tools that helped me</Description>
        <Codewindow name="skills.js" code={code} />
    </Section >
}