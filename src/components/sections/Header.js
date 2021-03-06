import React from 'react'
import { Section as SectionBase } from '../Section'
import picture from '../../images/po.png'
import styled from 'styled-components'
import Button from '../Button'
import { Mouse } from 'grommet-icons';
import cv from '../../downloads/cesar-varela-resume.pdf'

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

const Section = styled(SectionBase)`
	margin-top: 60px;
	margin-bottom: -66px;
	::before{
		display: none;
	}
	.mouse {
		margin-top: 60px;
	}
`

export function Header() {

	return <Section id="head">
		<Image src={picture} alt="po face" />
		<Name>Cesar Varela</Name>
		<Quote className="quote">Mostly self-thought, I've been a <b>Full Stack Engineer &amp; Consultant</b> for more than 15 years, always with an eye on both Design and User Experience.</Quote>

		<Resume>
			Scroll down to know more about me or <Button href={cv} download>Download Resume</Button>
		</Resume>
		<Mouse className="mouse" size="large" />
	</Section>
}