import React from 'react'
import { Section } from './Section'

let context = require.context("../images/projects", true, /^\.\/.*\.png$/)

export class Projects extends React.Component {

    render() {
        return <Section id="projects" subtitle="Current Projects">
            {
                this.props.items.map((item, index) => {
                    return <div key={index} className="project">
                        <div className="image">
                            <a href={item.link} target="_blank">
                                <img src={context(item.img)} />
                            </a>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                })
            }
        </Section>
    }
}