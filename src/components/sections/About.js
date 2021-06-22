import React from 'react'
import { Section as SectionBase } from '../Section'
import ListCard from '../ListCard'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Codewindow from '../CodeWindow'

const code = `export default {
    skills:
    [
        {
            name: "Languages",
            items:
            [
                {
                name: "Javascript"
                },
                {
                name: "Typescript"
                },
                {
                name: "Swift"
                },
                {
                name: "C#"
                },
                {
                name: "ActionScript 3"
                },
                {
                name: "PHP"
                },
                {
                name: "GO"
                },
            ]
        },
        {
            name: "Frameworks/Libraries",
            items:
            [
                {
                name: "React"
                },
                {
                name: "Angular"
                },
                {
                name: "Express"
                },
                {
                name: "Next.js"
                },
                {
                name: "GraphQL"
                }
            ]
        },

        {
            name: "Stacks/Platforms",
            items:
            [
                {
                name: "Node.js"
                },
                {
                name: "iOS"
                },
                {
                name: ".NET"
                },
                {
                name: "Unity 3D"
                },
                {
                name: "MERN"
                }
            ]
        },
        {
            name: "Software",
            items:
            [
                {
                name: "Visual Studio/ VSCode"
                },
                {
                name: "Xcode"
                },
                {
                name: "Photoshop"
                },
                {
                name: "Unity 3D"
                },
                {
                name: "Sketch"
                },
                {
                name: "Figma"
                },
                {
                name: "Chrome DEV tools"
                }
            ]
        }
    ]
}
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