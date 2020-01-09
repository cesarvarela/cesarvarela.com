import React from 'react'
import { Section } from './Section'
import styled from 'styled-components'
import Card from './Card'

const Cards = styled.div`
    display: flex;
    margin: 12px auto 0;
    & > .card {
        flex: 1;
        margin: 12px;
    }
`

let context = require.context("../images/projects", true, /^\.\/.*\.png$/)

export class Projects extends React.Component {

    render() {
        return <Section id="projects" subtitle="Current Projects">
            <Cards>
                {
                    this.props.items.map((item, index) => <Card
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