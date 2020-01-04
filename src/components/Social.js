import React from 'react'
import classnames from 'classnames'
import { Section } from './Section'

export class Social extends React.Component {

    render() {
        return <Section id="social" subtitle="social">
            <ul>
                {
                    this.props.items.map((item, index) => {
                        return <li key={index} className="item">
                            <a href={item.link} target="_blank">
                                <i className={classnames('fa fa-' + item.key)} aria-hidden="true"></i>
                            </a>
                        </li>
                    })
                }
            </ul>
        </Section>
    }
}