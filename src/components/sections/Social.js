import React from 'react'
import { Section } from '../Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow, faLinkedin, faGithub, faLastfm, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const iconsMap = {
    'stack-overflow': <FontAwesomeIcon icon={faStackOverflow} />,
    'linkedin': <FontAwesomeIcon icon={faLinkedin} />,
    'github': <FontAwesomeIcon icon={faGithub} />,
    'lastfm': <FontAwesomeIcon icon={faLastfm} />,
    'facebook': <FontAwesomeIcon icon={faFacebook} />,
    'twitter': <FontAwesomeIcon icon={faTwitter} />,
}

export class Social extends React.Component {

    render() {
        return <Section id="social" subtitle="social">
            <ul>
                {
                    this.props.items.map((item, index) => {
                        return <li key={index} className="item">
                            <a href={item.link} target="_blank">
                                {iconsMap[item.key]}
                            </a>
                        </li>
                    })
                }
            </ul>
        </Section>
    }
}