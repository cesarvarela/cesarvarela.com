import React from 'react'
import { Section } from '../Section'
import styled from 'styled-components'
import Card from '../Card'

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

export class Projects extends React.Component {

    render() {
        return <Section id="projects" subtitle="Latest Projects">
            <Cards>
                {
                    this.props.items.map((item) => <Card
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
}