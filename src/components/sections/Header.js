import React from 'react'
import { Section } from '../Section'
import picture from '../../images/po.png'
import styled from 'styled-components'

const Image = styled.img`
	margin: 0 auto 0;
	display: block;
	width: 180px;
	height: 180px;
`

const Quote = styled.p`
	margin: 36px auto 0;
	font-size: 24px;
`

export function Header() {

	return <Section id="head" title="Cesar Varela">
		<Image src={picture} alt="po face" />
		<Quote className="quote">Mostly self-thought, I've been a <b>Software Developer &amp; Consultant</b> for more than 15 years, always with an eye on both Design and User Experience.</Quote>
	</Section>
}