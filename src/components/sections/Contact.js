import React from 'react'
import { Section } from '../Section'
import qr from '../../images/MECard.png'
import styled from 'styled-components'

const MECard = styled.div`
	max-width: 240px;
	margin: 0 auto;
	& > img {
		width: 100%;
	}
	`

const EmailLink = styled.a`
	display: inline-block;
	margin: 36px auto 0;
	text-decoration: none;
	color: ${({ theme }) => theme.color};
`

export class Contact extends React.Component {

	render() {
		return <Section id="contact" subtitle="Contact">
			<MECard>
				<img src={qr} alt="qr" />
				<p>Scan this to get my contact info to your smartphone.</p>
			</MECard>
			<EmailLink href="mailto:mail@cesarvarela.com">mail@cesarvarela.com</EmailLink>
		</Section>
	}
}