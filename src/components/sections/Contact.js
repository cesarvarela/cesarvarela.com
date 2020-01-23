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

const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.color};
`

const Links = styled.ul`
	margin: 36px auto 0;
	list-style: none;

	& >  li {
		display: inline-block;
		padding: 0 6px;
	}
`

export function Contact() {

	return <Section id="contact" subtitle="Contact">
		<MECard>
			<img src={qr} alt="qr" />
			<p>Scan this to get my contact info to your smartphone.</p>
		</MECard>
		<Links>
			<li>
				<Link href="mailto:mail@cesarvarela.com">mail@cesarvarela.com</Link>
			</li>
			<li>
				<Link href="https://www.twine.fm/cesarvarela">Twine</Link>
			</li>
			<li>
				<Link href="https://www.upwork.com/fl/cesarvarela">Upwork</Link>
			</li>
		</Links>
	</Section>
}