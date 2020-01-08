import React from 'react'
import { Section } from './Section'
import Card from './Card'

let context = require.context("../images/projects", true, /^\.\/.*\.png$/)

export class Projects extends React.Component {

    render() {
        return <Section id="projects" subtitle="Current Projects">
            <div className="cards">
                {
                    this.props.items.map((item, index) => <Card
                        src={context(item.img)}
                        title={item.title}
                        description={item.description}
                        href={item.link}
                    />)
                }
            </div>
        </Section>
    }
}