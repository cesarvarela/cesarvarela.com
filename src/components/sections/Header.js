import React from 'react'
import { Section as SectionBase } from '../Section'
import styled from 'styled-components'
import Button from '../Button'
import cv from '../../downloads/cesar-varela-resume.pdf'
import ScrollSvg from '../../svg/scroll.svg'
import { getColor } from '../../lib/theme'
import { StaticImage } from "gatsby-plugin-image"

const ImageWrapper = styled.div`
	border-radius: 100%;
	width: max-content;
	margin: 0 auto 0;
	overflow: hidden;
`

const Quote = styled.div`
	margin: 12px auto 0;
	font-size: 18px;
	.small {
		font-size: 14px;
	}
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

const Scroll = styled(ScrollSvg)`
    width: 32px;
    height: 32px;
	margin: 24px;
	path {
		fill: ${getColor('foreground')};
	}
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
		<ImageWrapper>
			<StaticImage width={200} height={200} src="../../images/po.png" alt="A dinosaur" />
		</ImageWrapper>
		<Name>Cesar Varela</Name>

		<Quote className="quote">
			<p>Greetings 👋! </p>
			<p>I'm a full-stack engineer with over 15 years of professional experience in startup and big-tech environments focused on delivering the best UX &amp; UI.</p>
		</Quote>

		<Resume>
			Scroll down to know more about me or <Button href={cv} download>Download Resume</Button>
		</Resume>
		<Scroll />
	</Section>
}