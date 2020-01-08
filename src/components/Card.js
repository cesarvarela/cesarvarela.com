import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

export default function Card({ src, title, description, href }) {

    return <div className="card">
        <div className="image" style={{ backgroundImage: `url(${src})` }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={href} target="_blank">View more <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
    </div>
}