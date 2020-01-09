import React from 'react'
import { Section } from '../Section'
import picture from '../../images/po.png'

export function Header() {

	return <Section id="head" title="Cesar Varela">
		<img className="po" src={picture} alt="po face" />
		<p className="quote">Mostly self-thought, I've been a <b>Software Developer &amp; Consultant</b> for more than 15 years, always with an eye on both Design and User Experience.</p>
	</Section>
}