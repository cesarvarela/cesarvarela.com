import React from 'react'
import { Section } from './Section'
import MECard from '../images/MECard.png'

export class Contact extends React.Component {

	render() {
		return <Section id="contact" subtitle="Contact">
			<div className="mecard">
				<img src={MECard} alt="qr" />
				<p>Scan this to get my contact info to your smartphone.</p>
			</div>
			<div className="mail">
				<a href="mailto:mail@cesarvarela.com">mail@cesarvarela.com</a>
			</div>
		</Section>
	}
}