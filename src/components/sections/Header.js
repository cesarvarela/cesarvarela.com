import React from 'react'
import { Section } from '../Section'
import picture from '../../images/po.png'
import styled from 'styled-components'
import Button from '../Button'
import cv from '../../downloads/cesarvarela-CV.pdf'

const Image = styled.img`
	margin: 0 auto 0;
	display: block;
	width: 180px;
	height: 180px;
	border-radius: 100%;
`

const Quote = styled.p`
	margin: 12px auto 0;
	font-size: 18px;
`

const Resume = styled.div`
	margin: 36px auto 0;

	${Button} {
		margin: 18px 0 0 18px;
	}
`

const Name = styled.h1`
	background: linear-gradient(266.96deg, #3FC5FF -21.03%, #FF3EC9 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	letter-spacing: -0.04em;
	font-size: 72px;
	margin: 24px auto 0;
`

export function Header() {

	return <Section id="head">
		<Image src={picture} alt="po face" />
		<Name>Cesar Varela</Name>
		<Quote className="quote">Mostly self-thought, I've been a <b>Software Developer &amp; Consultant</b> for more than 15 years, always with an eye on both Design and User Experience.</Quote>

		<Resume>
			Scroll down to know more about me or <Button href={cv} download>Download Resume</Button>
		</Resume>
	</Section>
}